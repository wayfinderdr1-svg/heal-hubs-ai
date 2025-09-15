import { useState, useEffect } from "react";
import Footer from "@/components/Footer";
import { MapPin, Phone, Globe, Clock, Users, GraduationCap, Search } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import supportResources from "@/assets/support-resources.jpg";

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
  const [zipCode, setZipCode] = useState<string>("");
  const [isLoadingLocation, setIsLoadingLocation] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [zipSearchQuery, setZipSearchQuery] = useState("");
  const [resources, setResources] = useState<Resource[]>([]);

  // Mock data organized by zip code - in a real app, this would come from an API
  const resourcesByZip: Record<string, Resource[]> = {
    "10001": [
      {
        id: "nyc1",
        name: "Manhattan Mental Health Center",
        type: "treatment",
        address: "123 Broadway, New York, NY 10001",
        phone: "(212) 555-0101",
        website: "https://manhattanmhc.org",
        description: "Comprehensive mental health services in the heart of Manhattan with specialized programs for anxiety and depression.",
        hours: "Mon-Fri 8AM-8PM, Sat 9AM-5PM",
        distance: "0.3 miles"
      },
      {
        id: "nyc2",
        name: "Downtown Recovery Circle",
        type: "support_group",
        address: "456 Wall St, New York, NY 10001",
        phone: "(212) 555-0202",
        description: "Peer support meetings for professionals dealing with work-related stress and mental health challenges.",
        hours: "Wednesdays 6PM-7:30PM",
        distance: "0.7 miles"
      }
    ],
    "90210": [
      {
        id: "bh1",
        name: "Beverly Hills Wellness Center",
        type: "treatment",
        address: "789 Rodeo Dr, Beverly Hills, CA 90210",
        phone: "(310) 555-0301",
        website: "https://bhwellness.com",
        description: "Luxury mental health treatment facility offering personalized therapy and wellness programs.",
        hours: "Mon-Sat 7AM-9PM",
        distance: "0.2 miles"
      },
      {
        id: "bh2",
        name: "West Coast Education Hub",
        type: "education",
        address: "321 Sunset Blvd, Beverly Hills, CA 90210",
        phone: "(310) 555-0302",
        website: "https://westcoasteducation.org",
        description: "Mental health education workshops, stress management classes, and wellness seminars.",
        hours: "Tue-Thu 10AM-6PM, Sat 9AM-3PM",
        distance: "1.1 miles"
      }
    ],
    "29607": [
      {
        id: "sc1",
        name: "Greenville County Mental Health Center",
        type: "treatment",
        address: "1200 Wade Hampton Blvd, Greenville, SC 29607",
        phone: "(864) 555-0401",
        website: "https://gcmhc.org",
        description: "Community mental health services serving Greenville County with individual and family therapy programs.",
        hours: "Mon-Fri 8AM-6PM",
        distance: "2.1 miles"
      },
      {
        id: "sc2",
        name: "Mauldin Recovery Support Group",
        type: "support_group",
        address: "105 E Butler Rd, Mauldin, SC 29662",
        phone: "(864) 555-0402",
        description: "Weekly peer support meetings for individuals and families affected by mental health challenges.",
        hours: "Thursdays 7PM-8:30PM",
        distance: "1.3 miles"
      },
      {
        id: "sc3",
        name: "Upstate Mental Health Education Center",
        type: "education",
        address: "900 S Main St, Greenville, SC 29601",
        phone: "(864) 555-0403",
        website: "https://upstatementalhealth.org",
        description: "Educational workshops on stress management, coping skills, and mental wellness for the Upstate community.",
        hours: "Mon-Wed 9AM-5PM, Sat 10AM-2PM",
        distance: "3.2 miles"
      },
      {
        id: "sc4",
        name: "Bon Secours St. Francis Behavioral Health",
        type: "treatment",
        address: "1 St Francis Dr, Greenville, SC 29601",
        phone: "(864) 255-1000",
        website: "https://stfrancishealth.org/behavioral-health",
        description: "Full-service behavioral health hospital providing inpatient and outpatient mental health services.",
        hours: "24/7 Emergency Services",
        distance: "4.1 miles"
      }
    ],
    "default": [
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
      }
    ]
  };

  useEffect(() => {
    // Load default resources on component mount
    setResources(resourcesByZip["default"]);
  }, []);

  const reverseGeocode = async (lat: number, lon: number): Promise<string> => {
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}&zoom=18&addressdetails=1`
      );
      const data = await response.json();
      
      if (data && data.address) {
        const postcode = data.address.postcode || data.address.zip_code;
        if (postcode) {
          // Extract just the 5-digit zip code
          const zipMatch = postcode.match(/(\d{5})/);
          return zipMatch ? zipMatch[1] : "";
        }
      }
      return "";
    } catch (error) {
      console.error("Reverse geocoding failed:", error);
      return "";
    }
  };

  const loadResourcesForZip = (zip: string) => {
    // Check if we have specific resources for this zip code
    const zipResources = resourcesByZip[zip];
    if (zipResources) {
      setResources(zipResources);
      console.log(`Loaded ${zipResources.length} resources for zip code ${zip}`);
    } else {
      // Use default resources if no specific ones found
      setResources(resourcesByZip["default"]);
      console.log(`No specific resources found for zip ${zip}, using default resources`);
    }
  };

  const getLocation = () => {
    setIsLoadingLocation(true);
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          
          try {
            // Get zip code from coordinates
            const zip = await reverseGeocode(latitude, longitude);
            
            if (zip) {
              setZipCode(zip);
              setLocation(`Zip Code: ${zip}`);
              loadResourcesForZip(zip);
              console.log(`Successfully detected zip code: ${zip}`);
            } else {
              setLocation("Unable to determine zip code");
              setZipCode("");
              console.log("Failed to extract zip code from location data");
            }
          } catch (error) {
            console.error("Error processing location:", error);
            setLocation("Error processing location");
            setZipCode("");
          }
          
          setIsLoadingLocation(false);
        },
        (error) => {
          console.error("Error getting location:", error);
          let errorMessage = "Location access denied";
          
          switch (error.code) {
            case error.PERMISSION_DENIED:
              errorMessage = "Location access denied. Please enable location services.";
              break;
            case error.POSITION_UNAVAILABLE:
              errorMessage = "Location information unavailable.";
              break;
            case error.TIMEOUT:
              errorMessage = "Location request timed out.";
              break;
          }
          
          setLocation(errorMessage);
          setZipCode("");
          setIsLoadingLocation(false);
        },
        {
          enableHighAccuracy: true,
          timeout: 10000,
          maximumAge: 300000 // 5 minutes
        }
      );
    } else {
      setLocation("Geolocation not supported by this browser");
      setZipCode("");
      setIsLoadingLocation(false);
    }
  };

  const handleZipSearch = () => {
    const cleanZip = zipSearchQuery.trim();
    if (cleanZip && /^\d{5}$/.test(cleanZip)) {
      setZipCode(cleanZip);
      setLocation(`Zip Code: ${cleanZip}`);
      loadResourcesForZip(cleanZip);
    }
  };

  const handleZipSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleZipSearch();
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
          <section className="text-center mb-8 relative">
            <div className="relative rounded-2xl overflow-hidden mb-8">
              <img 
                src={supportResources} 
                alt="Local mental health resources and community support"
                className="w-full h-64 md:h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-background/20" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="max-w-4xl mx-auto px-4 text-center">
                  <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                    Local Resources
                  </h1>
                  <p className="text-xl text-white/90 mb-6">
                    Find treatment centers, support groups, and educational resources in your area
                    {zipCode && (
                      <span className="block text-lg font-medium text-white mt-2 bg-primary/20 rounded-lg px-4 py-2 backdrop-blur-sm">
                        📍 Showing {resources.length} resources for zip code: {zipCode}
                      </span>
                    )}
                  </p>
                </div>
              </div>
            </div>
            
            {/* Location and Search */}
            <div className="max-w-2xl mx-auto space-y-4">
              <div className="flex flex-col sm:flex-row items-center gap-3 justify-center">
                <Button
                  onClick={getLocation}
                  disabled={isLoadingLocation}
                  variant="outline"
                  className="gap-2"
                >
                  <MapPin className="w-4 h-4" />
                  {isLoadingLocation ? "Getting Location..." : "Use My Location"}
                </Button>
                <span className="text-sm text-muted-foreground">or</span>
                <form onSubmit={handleZipSubmit} className="flex items-center gap-2">
                  <Input
                    placeholder="Enter zip code (e.g. 10001)"
                    value={zipSearchQuery}
                    onChange={(e) => setZipSearchQuery(e.target.value.replace(/\D/g, '').slice(0, 5))}
                    className="w-48"
                    maxLength={5}
                  />
                  <Button
                    type="submit"
                    disabled={!zipSearchQuery || zipSearchQuery.length !== 5}
                    variant="default"
                    size="sm"
                  >
                    Search
                  </Button>
                </form>
              </div>
              
              {location && (
                <div className="text-center">
                  <span className="text-sm text-muted-foreground flex items-center gap-1 justify-center">
                    <MapPin className="w-4 h-4" />
                    {location}
                  </span>
                </div>
              )}
              
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