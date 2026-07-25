import { useState, useEffect } from "react";
import Footer from "@/components/Footer";
import { MapPin, Phone, Globe, Clock, Users, GraduationCap, Search } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import supportResources from "@/assets/support-resources.jpg";
import { ResourceService, type Resource } from "@/services/resourceService";


const LocalResources = () => {
  const [location, setLocation] = useState<string>("");
  const [zipCode, setZipCode] = useState<string>("");
  const [isLoadingLocation, setIsLoadingLocation] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [zipSearchQuery, setZipSearchQuery] = useState("");
  const [resources, setResources] = useState<Resource[]>([]);
  const [isLoadingResources, setIsLoadingResources] = useState(false);

  useEffect(() => {
    // Always load Greenville, SC resources
    loadResourcesForZip("29607");
    setZipCode("29607");
    setLocation("Greenville, SC 29607");
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

  const loadResourcesForZip = async (zip: string) => {
    setIsLoadingResources(true);
    try {
      const resourceList = await ResourceService.getResourcesByZip(zip);
      setResources(resourceList);
    } catch (error) {
      console.error("Error loading resources:", error);
      // Always fallback to Greenville, SC 29607 resources
      const greenvilleResources = await ResourceService.getResourcesByZip("29607");
      setResources(greenvilleResources);
      setZipCode("29607");
      setLocation("Greenville, SC 29607");
    } finally {
      setIsLoadingResources(false);
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
              console.log("Failed to extract zip code from location data; falling back to Greenville, SC 29607");
              setLocation("Greenville, SC 29607");
              setZipCode("29607");
              loadResourcesForZip("29607");
            }
          } catch (error) {
            console.error("Error processing location; falling back to Greenville, SC 29607:", error);
            setLocation("Greenville, SC 29607");
            setZipCode("29607");
            loadResourcesForZip("29607");
          }
          
          setIsLoadingLocation(false);
        },
        (error) => {
          console.error("Error getting location; falling back to Greenville, SC 29607:", error);
          setLocation("Greenville, SC 29607");
          setZipCode("29607");
          loadResourcesForZip("29607");
          setIsLoadingLocation(false);
        },
        {
          enableHighAccuracy: true,
          timeout: 10000,
          maximumAge: 300000 // 5 minutes
        }
      );
    } else {
      console.log("Geolocation not supported; using Greenville, SC 29607");
      setLocation("Greenville, SC 29607");
      setZipCode("29607");
      loadResourcesForZip("29607");
      setIsLoadingLocation(false);
    }
  };

  const handleZipSearch = () => {
    const cleanZip = zipSearchQuery.trim();
    console.log(`Searching for zip: ${cleanZip}`);
    if (cleanZip && /^\d{5}$/.test(cleanZip)) {
      setZipCode(cleanZip);
      setLocation(`Zip Code: ${cleanZip}`);
      loadResourcesForZip(cleanZip);
      console.log(`Search completed for zip: ${cleanZip}`);
    } else {
      console.log(`Invalid zip code format: ${cleanZip}`);
    }
  };

  const handleZipSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleZipSearch();
  };

  const filteredResources = ResourceService.searchResources(resources, searchQuery);

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
                <span className="text-sm text-muted-foreground flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  Greenville, SC 29607
                </span>
              </div>
              
              {location && (
                <div className="text-center">
                  <span className="text-sm text-muted-foreground flex items-center gap-1 justify-center">
                    <MapPin className="w-4 h-4" />
                    {location}
                  </span>
                </div>
              )}
              
              {/* Hidden resource search
              <div className="relative">
                <Search className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                <Input
                  placeholder="Search resources by name, type, or location..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              */}
            </div>
          </section>

          {/* Resources Grid */}
          <section>
            <div className="grid gap-6 max-w-6xl mx-auto">
              {isLoadingResources ? (
                <Card className="bg-card/50 backdrop-blur border-accent/20">
                  <CardContent className="p-8 text-center">
                    <p className="text-muted-foreground">Loading resources...</p>
                  </CardContent>
                </Card>
              ) : filteredResources.length === 0 ? (
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