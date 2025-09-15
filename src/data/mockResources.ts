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

// Mock data organized by zip code - in a real app, this would come from an API
export const resourcesByZip: Record<string, Resource[]> = {
  // New York City
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

  // Atlanta, Georgia
  "30309": [
    {
      id: "atl1",
      name: "Atlanta Mental Health Associates",
      type: "treatment",
      address: "1234 Peachtree St, Atlanta, GA 30309",
      phone: "(404) 555-0101",
      website: "https://atlantamha.org",
      description: "Full-service mental health clinic serving the Atlanta metro area with individual, group, and family therapy.",
      hours: "Mon-Fri 8AM-7PM, Sat 9AM-4PM",
      distance: "0.5 miles"
    },
    {
      id: "atl2",
      name: "Midtown Support Network",
      type: "support_group",
      address: "567 Juniper St, Atlanta, GA 30309",
      phone: "(404) 555-0202",
      description: "Weekly peer support groups for anxiety, depression, and life transitions in a welcoming environment.",
      hours: "Tuesdays 7PM-8:30PM, Saturdays 10AM-11:30AM",
      distance: "0.8 miles"
    },
    {
      id: "atl3",
      name: "Georgia Mental Health Education Center",
      type: "education",
      address: "890 Spring St, Atlanta, GA 30309",
      phone: "(404) 555-0203",
      website: "https://gmhec.org",
      description: "Educational workshops on mental health awareness, stress management, and wellness strategies.",
      hours: "Mon-Thu 9AM-6PM, Sat 10AM-3PM",
      distance: "1.2 miles"
    }
  ],

  "30312": [
    {
      id: "atl4",
      name: "Downtown Atlanta Counseling Center",
      type: "treatment",
      address: "123 Marietta St, Atlanta, GA 30312",
      phone: "(404) 555-0301",
      website: "https://dacc.org",
      description: "Community mental health services with sliding scale fees and specialized trauma therapy programs.",
      hours: "Mon-Fri 8AM-6PM",
      distance: "1.0 miles"
    },
    {
      id: "atl5",
      name: "Urban Recovery Circle",
      type: "support_group",
      address: "456 Decatur St, Atlanta, GA 30312",
      phone: "(404) 555-0302",
      description: "Diverse support groups for young professionals dealing with stress, anxiety, and career transitions.",
      hours: "Thursdays 6:30PM-8PM",
      distance: "1.5 miles"
    }
  ],

  // Los Angeles, California
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

  "90028": [
    {
      id: "la1",
      name: "Hollywood Mental Health Clinic",
      type: "treatment",
      address: "1555 Vine St, Hollywood, CA 90028",
      phone: "(323) 555-0401",
      website: "https://hollywoodmhc.org",
      description: "Community-focused mental health services with culturally competent care and bilingual staff.",
      hours: "Mon-Fri 8AM-6PM, Sat 10AM-4PM",
      distance: "0.7 miles"
    },
    {
      id: "la2",
      name: "Creative Arts Therapy Group",
      type: "support_group",
      address: "1234 Highland Ave, Hollywood, CA 90028",
      phone: "(323) 555-0402",
      description: "Unique support groups combining traditional therapy with creative arts for entertainment industry professionals.",
      hours: "Mondays 7PM-8:30PM, Thursdays 6PM-7:30PM",
      distance: "1.2 miles"
    }
  ],

  // Chicago, Illinois
  "60601": [
    {
      id: "chi1",
      name: "Chicago Loop Mental Health Center",
      type: "treatment",
      address: "100 N LaSalle St, Chicago, IL 60601",
      phone: "(312) 555-0501",
      website: "https://chicagoloopmhc.org",
      description: "Downtown Chicago mental health services specializing in urban stress and career-related mental health.",
      hours: "Mon-Fri 7AM-8PM, Sat 9AM-5PM",
      distance: "0.4 miles"
    },
    {
      id: "chi2",
      name: "Windy City Support Network",
      type: "support_group",
      address: "200 W Madison St, Chicago, IL 60601",
      phone: "(312) 555-0502",
      description: "Professional support groups for finance and business workers dealing with high-stress environments.",
      hours: "Tuesdays 6PM-7:30PM, Fridays 12PM-1PM",
      distance: "0.6 miles"
    },
    {
      id: "chi3",
      name: "Midwest Mental Health Education Institute",
      type: "education",
      address: "300 S Wacker Dr, Chicago, IL 60601",
      phone: "(312) 555-0503",
      website: "https://mwhei.org",
      description: "Comprehensive mental health education programs and workplace wellness workshops.",
      hours: "Mon-Wed 9AM-7PM, Fri 10AM-5PM",
      distance: "0.9 miles"
    }
  ],

  // Miami, Florida
  "33101": [
    {
      id: "mia1",
      name: "Miami Beach Mental Wellness Center",
      type: "treatment",
      address: "1001 Ocean Dr, Miami Beach, FL 33139",
      phone: "(305) 555-0601",
      website: "https://miamibeachmwc.org",
      description: "Coastal mental health services with a focus on seasonal affective support and lifestyle counseling.",
      hours: "Mon-Fri 8AM-7PM, Sat 10AM-6PM",
      distance: "0.3 miles"
    },
    {
      id: "mia2",
      name: "South Beach Recovery Circle",
      type: "support_group",
      address: "500 Lincoln Rd, Miami Beach, FL 33139",
      phone: "(305) 555-0602",
      description: "Vibrant support community for young adults navigating life transitions and social pressures.",
      hours: "Wednesdays 7PM-8:30PM, Sundays 10AM-11:30AM",
      distance: "0.8 miles"
    }
  ],

  // Greenville, South Carolina
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

  // Default fallback resources
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

export type { Resource };