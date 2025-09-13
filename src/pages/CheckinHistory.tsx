import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from "recharts";
import { CalendarDays, TrendingUp, Plus, Heart, Zap, Brain, Moon, Dumbbell } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";
import { toast } from "sonner";
import Footer from "@/components/Footer";
import { format, subDays, subWeeks, subMonths } from "date-fns";

const CheckinHistory = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [checkins, setCheckins] = useState<any[]>([]);
  const [timeRange, setTimeRange] = useState("7d");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!user) {
      navigate("/auth");
      return;
    }
    
    fetchCheckins();
  }, [user, navigate, timeRange]);

  const fetchCheckins = async () => {
    if (!user) return;

    setIsLoading(true);
    
    // Calculate date range
    let startDate = new Date();
    switch (timeRange) {
      case "7d":
        startDate = subDays(new Date(), 7);
        break;
      case "30d":
        startDate = subDays(new Date(), 30);
        break;
      case "3m":
        startDate = subMonths(new Date(), 3);
        break;
      case "1y":
        startDate = subMonths(new Date(), 12);
        break;
    }

    const { data, error } = await supabase
      .from('daily_checkins')
      .select('*')
      .eq('user_id', user.id)
      .gte('checkin_date', startDate.toISOString().split('T')[0])
      .order('checkin_date', { ascending: true });

    if (error) {
      console.error('Error fetching checkins:', error);
      toast.error("Failed to load check-in history");
    } else {
      setCheckins(data || []);
    }
    
    setIsLoading(false);
  };

  const getChartData = () => {
    return checkins.map(checkin => ({
      date: format(new Date(checkin.checkin_date), 'MM/dd'),
      mood: checkin.mood_rating,
      energy: checkin.energy_level,
      stress: checkin.stress_level,
      sleep: checkin.sleep_hours,
      exercise: checkin.exercise_minutes
    }));
  };

  const getAverages = () => {
    if (checkins.length === 0) return null;
    
    const totals = checkins.reduce((acc, checkin) => ({
      mood: acc.mood + checkin.mood_rating,
      energy: acc.energy + checkin.energy_level,
      stress: acc.stress + checkin.stress_level,
      sleep: acc.sleep + (checkin.sleep_hours || 0),
      exercise: acc.exercise + (checkin.exercise_minutes || 0)
    }), { mood: 0, energy: 0, stress: 0, sleep: 0, exercise: 0 });

    const count = checkins.length;
    return {
      mood: (totals.mood / count).toFixed(1),
      energy: (totals.energy / count).toFixed(1),
      stress: (totals.stress / count).toFixed(1),
      sleep: (totals.sleep / count).toFixed(1),
      exercise: Math.round(totals.exercise / count)
    };
  };

  const getMostCommonGoals = () => {
    const goalCounts: Record<string, number> = {};
    checkins.forEach(checkin => {
      (checkin.recovery_goals || []).forEach((goal: string) => {
        goalCounts[goal] = (goalCounts[goal] || 0) + 1;
      });
    });

    return Object.entries(goalCounts)
      .sort(([,a], [,b]) => b - a)
      .slice(0, 5)
      .map(([goal, count]) => ({ name: goal, value: count }));
  };

  const chartData = getChartData();
  const averages = getAverages();
  const commonGoals = getMostCommonGoals();

  const COLORS = ['#8884d8', '#82ca9d', '#ffc658', '#ff7300', '#00ff88'];

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <main className="pb-12">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
              <p className="mt-4 text-muted-foreground">Loading your check-in history...</p>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      
      <main className="pb-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-6 sm:mb-8">
              <div>
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-2 sm:mb-4 flex items-center gap-2 sm:gap-3">
                  <TrendingUp className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                  Check-In History
                </h1>
                <p className="text-base sm:text-lg text-muted-foreground">
                  Track your progress and identify patterns in your personal journey
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
                <Select value={timeRange} onValueChange={setTimeRange}>
                  <SelectTrigger className="w-full sm:w-32">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="7d">Last 7 days</SelectItem>
                    <SelectItem value="30d">Last 30 days</SelectItem>
                    <SelectItem value="3m">Last 3 months</SelectItem>
                    <SelectItem value="1y">Last year</SelectItem>
                  </SelectContent>
                </Select>
                
                <Button onClick={() => navigate("/daily-checkin")} className="gap-2 w-full sm:w-auto">
                  <Plus className="w-4 h-4" />
                  New Check-In
                </Button>
              </div>
            </div>

            {checkins.length === 0 ? (
              <Card className="text-center py-12">
                <CardContent>
                  <CalendarDays className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">No check-ins yet</h3>
                  <p className="text-muted-foreground mb-6">
                    Start tracking your personal journey by completing your first daily check-in.
                  </p>
                  <Button onClick={() => navigate("/daily-checkin")} className="gap-2">
                    <Plus className="w-4 h-4" />
                    Create Your First Check-In
                  </Button>
                </CardContent>
              </Card>
            ) : (
              <div className="space-y-6">
                {/* Average Stats */}
                {averages && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4">
                    <Card>
                      <CardContent className="pt-6">
                        <div className="flex items-center gap-2 mb-2">
                          <Heart className="w-4 h-4 text-primary" />
                          <span className="text-sm font-medium">Avg Mood</span>
                        </div>
                        <div className="text-2xl font-bold text-primary">{averages.mood}</div>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardContent className="pt-6">
                        <div className="flex items-center gap-2 mb-2">
                          <Zap className="w-4 h-4 text-accent" />
                          <span className="text-sm font-medium">Avg Energy</span>
                        </div>
                        <div className="text-2xl font-bold text-accent">{averages.energy}</div>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardContent className="pt-6">
                        <div className="flex items-center gap-2 mb-2">
                          <Brain className="w-4 h-4 text-destructive" />
                          <span className="text-sm font-medium">Avg Stress</span>
                        </div>
                        <div className="text-2xl font-bold text-destructive">{averages.stress}</div>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardContent className="pt-6">
                        <div className="flex items-center gap-2 mb-2">
                          <Moon className="w-4 h-4 text-blue-500" />
                          <span className="text-sm font-medium">Avg Sleep</span>
                        </div>
                        <div className="text-2xl font-bold text-blue-500">{averages.sleep}h</div>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardContent className="pt-6">
                        <div className="flex items-center gap-2 mb-2">
                          <Dumbbell className="w-4 h-4 text-green-500" />
                          <span className="text-sm font-medium">Avg Exercise</span>
                        </div>
                        <div className="text-2xl font-bold text-green-500">{averages.exercise}m</div>
                      </CardContent>
                    </Card>
                  </div>
                )}

                {/* Mood, Energy, Stress Trends */}
                <Card>
                  <CardHeader>
                    <CardTitle>Mood, Energy & Stress Trends</CardTitle>
                    <CardDescription>Track your emotional wellbeing over time</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-48 sm:h-64 md:h-72 lg:h-80">
                      <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={chartData}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="date" />
                          <YAxis domain={[1, 10]} />
                          <Tooltip />
                          <Line type="monotone" dataKey="mood" stroke="#8884d8" strokeWidth={2} name="Mood" />
                          <Line type="monotone" dataKey="energy" stroke="#82ca9d" strokeWidth={2} name="Energy" />
                          <Line type="monotone" dataKey="stress" stroke="#ff7300" strokeWidth={2} name="Stress" />
                        </LineChart>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                </Card>

                {/* Sleep & Exercise */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Sleep Patterns</CardTitle>
                      <CardDescription>Hours of sleep per night</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="h-36 sm:h-44 md:h-48 lg:h-52">
                        <ResponsiveContainer width="100%" height="100%">
                          <BarChart data={chartData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="date" />
                            <YAxis />
                            <Tooltip />
                            <Bar dataKey="sleep" fill="#3b82f6" />
                          </BarChart>
                        </ResponsiveContainer>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Exercise Activity</CardTitle>
                      <CardDescription>Minutes of exercise per day</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="h-36 sm:h-44 md:h-48 lg:h-52">
                        <ResponsiveContainer width="100%" height="100%">
                          <BarChart data={chartData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="date" />
                            <YAxis />
                            <Tooltip />
                            <Bar dataKey="exercise" fill="#10b981" />
                          </BarChart>
                        </ResponsiveContainer>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Common Personal Goals */}
                {commonGoals.length > 0 && (
                  <Card>
                    <CardHeader>
                      <CardTitle>Most Common Personal Goals</CardTitle>
                      <CardDescription>Your top focus areas during this period</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="h-56 sm:h-64 md:h-72 lg:h-80">
                        <ResponsiveContainer width="100%" height="100%">
                          <PieChart>
                            <Pie
                              data={commonGoals}
                              cx="50%"
                              cy="50%"
                              labelLine={false}
                              label={({ name, percent }) => `${name} (${(percent * 100).toFixed(0)}%)`}
                              outerRadius={window.innerWidth < 768 ? 60 : 80}
                              fill="#8884d8"
                              dataKey="value"
                            >
                              {commonGoals.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                              ))}
                            </Pie>
                            <Tooltip />
                          </PieChart>
                        </ResponsiveContainer>
                      </div>
                    </CardContent>
                  </Card>
                )}
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CheckinHistory;