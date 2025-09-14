import { useState, useEffect } from "react";
import Footer from "@/components/Footer";
import { MapPin, Phone, Globe, Clock, Users, GraduationCap, Search } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

interface Resource {
  id: string;
  name: string;
  type: "treatment" | "support_group" | "education";
  address: string;
  phone?: string;
  website?: string;
  description: string;
  hours?: string;
  distance?: string;
}

const LocalResources = () => {
  const [location, setLocation] = useState<string>("");
  const [isLoadingLocation, setIsLoadingLocation] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [resources, setResources] = useState<Resource[]>([]);

  // Mock data - in a real app, this would come from an API
  const mockResources: Resource[] = [
    {
      id: "1",
      name: "Community Mental Health Center",
      type: "treatment",
      address: "123 Main St, Your City, State 12345",
      phone: "(555) 123-4567",
      website: "https://example.com",
      description: "Comprehensive mental health services including individual therapy, group therapy, and psychiatric care.",
      hours: "Mon-Fri 8AM-6PM",
      distance: "0.5 miles"
    },
    {
      id: "2",
      name: "Recovery Support Circle",
      type: "support_group",
      address: "456 Oak Ave, Your City, State 12345",
      phone: "(555) 987-6543",
      description: "Weekly peer support meetings for individuals in recovery. Open to all, no commitment required.",
      hours: "Tuesdays 7PM-8:30PM",
      distance: "1.2 miles"
    },
    {
      id: "3",
      name: "Wellness Education Center",
      type: "education",
      address: "789 Pine St, Your City, State 12345",
      phone: "(555) 456-7890",
      website: "https://wellness-education.com",
      description: "Educational workshops, seminars, and resources on mental health, coping strategies, and wellness.",
      hours: "Mon-Thu 9AM-5PM, Sat 10AM-2PM",
      distance: "2.1 miles"
    },
    {
      id: "4",
      name: "City Hospital Behavioral Health",
      type: "treatment",
      address: "321 Hospital Dr, Your City, State 12345",
      phone: "(555) 234-5678",
      website: "https://cityhospital.com/behavioral-health",
      description: "Inpatient and outpatient behavioral health services, crisis intervention, and specialized programs.",
      hours: "24/7 Emergency, Outpatient Mon-Fri 7AM-7PM",
      distance: "3.4 miles"
    },
    {
      id: "5",
      name: "Young Adults Support Network",
      type: "support_group",
      address: "654 College Rd, Your City, State 12345",
      description: "Support group specifically for young adults (18-25) dealing with mental health challenges.",
      hours: "Thursdays 6PM-7:30PM",
      distance: "1.8 miles"
    },
    {
      id: "6",
      name: "Community Library - Mental Health Resources",
      type: "education",
      address: "987 Library Ln, Your City, State 12345",
      phone: "(555) 345-6789",
      website: "https://communitylibrary.org/mental-health",
      description: "Free mental health books, online resources, and monthly educational seminars.",
      hours: "Mon-Sat 9AM-8PM, Sun 12PM-5PM",
      distance: "0.8 miles"
    }
  ];

  useEffect(() => {
    // Simulate loading resources
    setResources(mockResources);
  }, []);

  const getLocation = () => {
    setIsLoadingLocation(true);
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          // In a real app, you'd reverse geocode this to get the address
          setLocation("Your Current Location");
          setIsLoadingLocation(false);
        },
        (error) => {
          console.error("Error getting location:", error);
          setLocation("Location access denied");
          setIsLoadingLocation(false);
        }
      );
    } else {
      setLocation("Geolocation not supported");
      setIsLoadingLocation(false);
    }
  };

  const filteredResources = resources.filter(resource =>
    resource.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    resource.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    resource.address.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getResourceIcon = (type: string) => {
    switch (type) {
      case "treatment":
        return <Phone className="w-5 h-5 text-blue-500" />;
      case "support_group":
        return <Users className="w-5 h-5 text-green-500" />;
      case "education":
        return <GraduationCap className="w-5 h-5 text-purple-500" />;
      default:
        return <MapPin className="w-5 h-5 text-gray-500" />;
    }
  };

  const getResourceTypeLabel = (type: string) => {
    switch (type) {
      case "treatment":
        return "Treatment Center";
      case "support_group":
        return "Support Group";
      case "education":
        return "Educational Resource";
      default:
        return "Resource";
    }
  };

  const getResourceTypeBadgeColor = (type: string) => {
    switch (type) {
      case "treatment":
        return "bg-blue-100 text-blue-800 border-blue-200";
      case "support_group":
        return "bg-green-100 text-green-800 border-green-200";
      case "education":
        return "bg-purple-100 text-purple-800 border-purple-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <main className="pb-8">
        <div className="container mx-auto px-4 bg-cyan-900">
          {/* Header Section */}
          <section className="text-center mb-8 pt-6">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Local Resources
            </h1>
            <p className="text-xl text-muted-foreground mb-6">
              Find treatment centers, support groups, and educational resources in your area
            </p>
            
            {/* Location and Search */}
            <div className="max-w-2xl mx-auto space-y-4">
              <div className="flex items-center gap-3 justify-center">
                <Button
                  onClick={getLocation}
                  disabled={isLoadingLocation}
                  variant="outline"
                  className="gap-2"
                >
                  <MapPin className="w-4 h-4" />
                  {isLoadingLocation ? "Getting Location..." : "Use My Location"}
                </Button>
                {location && (
                  <span className="text-sm text-muted-foreground flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {location}
                  </span>
                )}
              </div>
              
              <div className="relative">
                <Search className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                <Input
                  placeholder="Search resources by name, type, or location..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
          </section>

          {/* Resources Grid */}
          <section>
            <div className="grid gap-6 max-w-6xl mx-auto">
              {filteredResources.length === 0 ? (
                <Card className="bg-card/50 backdrop-blur border-accent/20">
                  <CardContent className="p-8 text-center">
                    <p className="text-muted-foreground">No resources found matching your search.</p>
                  </CardContent>
                </Card>
              ) : (
                filteredResources.map((resource) => (
                  <Card key={resource.id} className="bg-card/50 backdrop-blur border-accent/20">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-3">
                          {getResourceIcon(resource.type)}
                          <div>
                            <CardTitle className="text-foreground">{resource.name}</CardTitle>
                            <Badge className={`mt-1 ${getResourceTypeBadgeColor(resource.type)}`}>
                              {getResourceTypeLabel(resource.type)}
                            </Badge>
                          </div>
                        </div>
                        {resource.distance && (
                          <span className="text-sm text-muted-foreground">{resource.distance}</span>
                        )}
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">{resource.description}</p>
                      
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-sm">
                          <MapPin className="w-4 h-4 text-muted-foreground" />
                          <span className="text-muted-foreground">{resource.address}</span>
                        </div>
                        
                        {resource.phone && (
                          <div className="flex items-center gap-2 text-sm">
                            <Phone className="w-4 h-4 text-muted-foreground" />
                            <a 
                              href={`tel:${resource.phone}`} 
                              className="text-primary hover:underline"
                            >
                              {resource.phone}
                            </a>
                          </div>
                        )}
                        
                        {resource.website && (
                          <div className="flex items-center gap-2 text-sm">
                            <Globe className="w-4 h-4 text-muted-foreground" />
                            <a 
                              href={resource.website} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="text-primary hover:underline"
                            >
                              Visit Website
                            </a>
                          </div>
                        )}
                        
                        {resource.hours && (
                          <div className="flex items-center gap-2 text-sm">
                            <Clock className="w-4 h-4 text-muted-foreground" />
                            <span className="text-muted-foreground">{resource.hours}</span>
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))
              )}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default LocalResources;