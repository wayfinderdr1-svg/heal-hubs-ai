import { resourcesByZip, type Resource } from '@/data/mockResources';

export class ResourceService {
  /**
   * Fetch resources by zip code
   * In a real app, this would make an API call
   */
  static async getResourcesByZip(zipCode: string): Promise<Resource[]> {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 100));
    
    const resources = resourcesByZip[zipCode];
    if (resources) {
      console.log(`Found ${resources.length} resources for zip code ${zipCode}`);
      return [...resources]; // Clone to avoid mutation
    } else {
      console.log(`No specific resources found for zip ${zipCode}, using Greenville, SC 29607 resources`);
      return [...resourcesByZip["29607"]];
    }
  }

  /**
   * Get all available zip codes with resources
   */
  static getAvailableZipCodes(): string[] {
    return Object.keys(resourcesByZip).filter(zip => zip !== 'default');
  }

  /**
   * Check if resources exist for a specific zip code
   */
  static hasResourcesForZip(zipCode: string): boolean {
    return zipCode in resourcesByZip;
  }

  /**
   * Search resources by query
   */
  static searchResources(resources: Resource[], query: string): Resource[] {
    if (!query.trim()) return resources;
    
    const searchTerm = query.toLowerCase();
    return resources.filter(resource =>
      resource.name.toLowerCase().includes(searchTerm) ||
      resource.description.toLowerCase().includes(searchTerm) ||
      resource.address.toLowerCase().includes(searchTerm)
    );
  }
}

export type { Resource };