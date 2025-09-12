import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { CalendarDays, Heart, Brain, Zap, Moon, Dumbbell, Target, Sparkles } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";
import { toast } from "sonner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const DailyCheckin = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [existingCheckin, setExistingCheckin] = useState<any>(null);
  
  const [formData, setFormData] = useState({
    moodRating: 5,
    energyLevel: 5,
    stressLevel: 5,
    sleepHours: 8,
    exerciseMinutes: 0,
    notes: "",
    gratitudeNotes: "",
    recoveryGoals: [] as string[]
  });

  const recoveryGoalOptions = [
    "Stay sober today",
    "Attend support meeting",
    "Practice mindfulness",
    "Exercise or move body",
    "Connect with support person",
    "Avoid triggers",
    "Practice gratitude",
    "Focus on self-care"
  ];

  useEffect(() => {
    if (!user) {
      navigate("/auth");
      return;
    }
    
    checkExistingCheckin();
  }, [user, navigate]);

  const checkExistingCheckin = async () => {
    if (!user) return;

    const today = new Date().toISOString().split('T')[0];
    
    const { data, error } = await supabase
      .from('daily_checkins')
      .select('*')
      .eq('user_id', user.id)
      .eq('checkin_date', today)
      .maybeSingle();

    if (error) {
      console.error('Error checking existing checkin:', error);
      return;
    }

    if (data) {
      setExistingCheckin(data);
      setFormData({
        moodRating: data.mood_rating,
        energyLevel: data.energy_level,
        stressLevel: data.stress_level,
        sleepHours: data.sleep_hours || 8,
        exerciseMinutes: data.exercise_minutes || 0,
        notes: data.notes || "",
        gratitudeNotes: data.gratitude_notes || "",
        recoveryGoals: data.recovery_goals || []
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;

    setIsLoading(true);

    try {
      const checkinData = {
        user_id: user.id,
        checkin_date: new Date().toISOString().split('T')[0],
        mood_rating: formData.moodRating,
        energy_level: formData.energyLevel,
        stress_level: formData.stressLevel,
        sleep_hours: formData.sleepHours,
        exercise_minutes: formData.exerciseMinutes,
        notes: formData.notes,
        gratitude_notes: formData.gratitudeNotes,
        recovery_goals: formData.recoveryGoals
      };

      const { error } = existingCheckin
        ? await supabase
            .from('daily_checkins')
            .update(checkinData)
            .eq('id', existingCheckin.id)
        : await supabase
            .from('daily_checkins')
            .insert([checkinData]);

      if (error) throw error;

      toast.success(existingCheckin ? "Check-in updated successfully!" : "Check-in saved successfully!");
      navigate("/checkin-history");
    } catch (error) {
      console.error('Error saving checkin:', error);
      toast.error("Failed to save check-in. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoalToggle = (goal: string) => {
    setFormData(prev => ({
      ...prev,
      recoveryGoals: prev.recoveryGoals.includes(goal)
        ? prev.recoveryGoals.filter(g => g !== goal)
        : [...prev.recoveryGoals, goal]
    }));
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20 pb-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4 flex items-center justify-center gap-3">
                <CalendarDays className="w-8 h-8 text-primary" />
                Daily Check-In
              </h1>
              <p className="text-lg text-muted-foreground">
                {existingCheckin ? "Update your daily check-in" : "Track your recovery journey with today's check-in"}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Mood Rating */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Heart className="w-5 h-5 text-primary" />
                      Mood Rating
                    </CardTitle>
                    <CardDescription>How are you feeling today? (1-10)</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <Slider
                        value={[formData.moodRating]}
                        onValueChange={([value]) => setFormData(prev => ({ ...prev, moodRating: value }))}
                        min={1}
                        max={10}
                        step={1}
                        className="w-full"
                      />
                      <div className="text-center">
                        <span className="text-2xl font-bold text-primary">{formData.moodRating}</span>
                        <p className="text-sm text-muted-foreground">
                          {formData.moodRating <= 3 ? "Low" : formData.moodRating <= 7 ? "Moderate" : "High"}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Energy Level */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Zap className="w-5 h-5 text-accent" />
                      Energy Level
                    </CardTitle>
                    <CardDescription>How energetic do you feel? (1-10)</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <Slider
                        value={[formData.energyLevel]}
                        onValueChange={([value]) => setFormData(prev => ({ ...prev, energyLevel: value }))}
                        min={1}
                        max={10}
                        step={1}
                        className="w-full"
                      />
                      <div className="text-center">
                        <span className="text-2xl font-bold text-accent">{formData.energyLevel}</span>
                        <p className="text-sm text-muted-foreground">
                          {formData.energyLevel <= 3 ? "Low" : formData.energyLevel <= 7 ? "Moderate" : "High"}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Stress Level */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Brain className="w-5 h-5 text-destructive" />
                      Stress Level
                    </CardTitle>
                    <CardDescription>How stressed do you feel? (1-10)</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <Slider
                        value={[formData.stressLevel]}
                        onValueChange={([value]) => setFormData(prev => ({ ...prev, stressLevel: value }))}
                        min={1}
                        max={10}
                        step={1}
                        className="w-full"
                      />
                      <div className="text-center">
                        <span className="text-2xl font-bold text-destructive">{formData.stressLevel}</span>
                        <p className="text-sm text-muted-foreground">
                          {formData.stressLevel <= 3 ? "Low" : formData.stressLevel <= 7 ? "Moderate" : "High"}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Sleep Hours */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Moon className="w-5 h-5 text-blue-500" />
                      Sleep Hours
                    </CardTitle>
                    <CardDescription>How many hours did you sleep?</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Input
                      type="number"
                      min="0"
                      max="24"
                      step="0.5"
                      value={formData.sleepHours}
                      onChange={(e) => setFormData(prev => ({ ...prev, sleepHours: parseFloat(e.target.value) || 0 }))}
                      className="text-center text-lg"
                    />
                  </CardContent>
                </Card>
              </div>

              {/* Exercise Minutes */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Dumbbell className="w-5 h-5 text-green-500" />
                    Exercise Minutes
                  </CardTitle>
                  <CardDescription>How many minutes did you exercise today?</CardDescription>
                </CardHeader>
                <CardContent>
                  <Input
                    type="number"
                    min="0"
                    value={formData.exerciseMinutes}
                    onChange={(e) => setFormData(prev => ({ ...prev, exerciseMinutes: parseInt(e.target.value) || 0 }))}
                    className="text-center text-lg"
                  />
                </CardContent>
              </Card>

              {/* Recovery Goals */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="w-5 h-5 text-primary" />
                    Today's Recovery Goals
                  </CardTitle>
                  <CardDescription>Select the goals you want to focus on today</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-3">
                    {recoveryGoalOptions.map((goal) => (
                      <div key={goal} className="flex items-center space-x-2">
                        <Checkbox
                          id={goal}
                          checked={formData.recoveryGoals.includes(goal)}
                          onCheckedChange={() => handleGoalToggle(goal)}
                        />
                        <Label htmlFor={goal} className="text-sm">{goal}</Label>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Gratitude Notes */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-yellow-500" />
                    Gratitude Notes
                  </CardTitle>
                  <CardDescription>What are you grateful for today?</CardDescription>
                </CardHeader>
                <CardContent>
                  <Textarea
                    value={formData.gratitudeNotes}
                    onChange={(e) => setFormData(prev => ({ ...prev, gratitudeNotes: e.target.value }))}
                    placeholder="I'm grateful for..."
                    rows={3}
                  />
                </CardContent>
              </Card>

              {/* Additional Notes */}
              <Card>
                <CardHeader>
                  <CardTitle>Additional Notes</CardTitle>
                  <CardDescription>Any other thoughts or reflections for today?</CardDescription>
                </CardHeader>
                <CardContent>
                  <Textarea
                    value={formData.notes}
                    onChange={(e) => setFormData(prev => ({ ...prev, notes: e.target.value }))}
                    placeholder="Share your thoughts, challenges, or victories from today..."
                    rows={4}
                  />
                </CardContent>
              </Card>

              <div className="flex justify-center">
                <Button 
                  type="submit" 
                  size="lg" 
                  disabled={isLoading}
                  className="min-w-[200px]"
                >
                  {isLoading ? "Saving..." : existingCheckin ? "Update Check-In" : "Save Check-In"}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default DailyCheckin;