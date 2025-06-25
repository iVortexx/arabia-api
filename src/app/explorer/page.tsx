
"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { CodeBlock } from "@/components/code-block";
import { useToast } from "@/hooks/use-toast";
import { Loader2, Send } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";

const apiEndpoints = [
  { id: 'countries', path: '/api/countries', params: [] },
  { id: 'country_by_code', path: '/api/countries/[code]', params: ['code'] },
  { id: 'get-code-by-country-name', path: '/api/countries/code/[name]', params: ['name'] },
  { id: 'cities_by_country', path: '/api/countries/[code]/cities', params: ['code'] },
  { id: 'cities', path: '/api/cities', params: ['country'] },
  { id: 'search', path: '/api/search', params: ['q'] },
  { id: 'random-country', path: '/api/countries/random', params: [] },
  { id: 'random-city', path: '/api/cities/random', params: [] },
];

export default function ExplorerPage() {
  const { toast } = useToast();

  const [selectedEndpointId, setSelectedEndpointId] = useState(apiEndpoints[0].id);
  const [params, setParams] = useState<{ [key: string]: string }>({});
  const [response, setResponse] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [baseUrl, setBaseUrl] = useState("");

  useEffect(() => {
    setBaseUrl(window.location.origin);
  }, []);

  useEffect(() => {
    setParams({});
    setResponse(null);
  }, [selectedEndpointId]);

  const handleParamChange = (paramName: string, value: string) => {
    setParams(prev => ({ ...prev, [paramName]: value }));
  };

  const constructUrl = () => {
    const endpoint = apiEndpoints.find(e => e.id === selectedEndpointId);
    if (!endpoint) return "";

    let urlPath = endpoint.path;
    const queryParams = new URLSearchParams();

    Object.entries(params).forEach(([key, value]) => {
      if (urlPath.includes(`[${key}]`)) {
        urlPath = urlPath.replace(`[${key}]`, encodeURIComponent(value));
      } else if (value) {
        queryParams.set(key, value);
      }
    });

    const queryString = queryParams.toString();
    return `${baseUrl}${urlPath}${queryString ? `?${queryString}` : ''}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setResponse(null);
    const requestUrl = constructUrl();

    if (!requestUrl) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Invalid Endpoint",
      });
      setIsLoading(false);
      return;
    }

    try {
      const res = await fetch(requestUrl);
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.message || "An error occurred");
      }
      setResponse(JSON.stringify(data, null, 2));
    } catch (error: any) {
      const errorMessage = error.message || "Failed to fetch data";
      setResponse(`{\n  "error": "${errorMessage}"\n}`);
      toast({
        variant: "destructive",
        title: "API Error",
        description: errorMessage,
      });
    } finally {
      setIsLoading(false);
    }
  };

  const currentEndpoint = apiEndpoints.find(e => e.id === selectedEndpointId);

  const endpointLabels: { [key: string]: string } = {
    countries: 'Get All Countries',
    country_by_code: 'Get Country by Code',
    'get-code-by-country-name': 'Get Code by Country Name',
    cities_by_country: 'Get Cities by Country',
    cities: 'Get All Cities',
    search: 'Search',
    'random-country': 'Get Random Country',
    'random-city': 'Get Random City',
  };

  const paramLabels: { [key: string]: string } = {
    code: 'Country Code (e.g. EG)',
    country: 'Country Code (e.g. AE)',
    q: 'Search term',
    name: 'Country Name (e.g. Egypt)',
  };

  const placeholderLabels: { [key: string]: string } = {
    code: 'EG',
    country: 'AE',
    q: 'Cairo',
    name: 'Egypt',
  };

  return (
    <div className="container mx-auto max-w-4xl px-4 py-12 md:py-20">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold font-headline">API Explorer</h1>
        <p className="text-lg text-muted-foreground mt-4">Test the API endpoints live. Enter an endpoint path and see the JSON response instantly.</p>
      </div>

      <Card className="border">
        <CardContent className="pt-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="col-span-1 md:col-span-3">
                <Label htmlFor="endpoint-select">Endpoint</Label>
                <Select value={selectedEndpointId} onValueChange={setSelectedEndpointId}>
                  <SelectTrigger id="endpoint-select">
                    <SelectValue placeholder="Select an endpoint" />
                  </SelectTrigger>
                  <SelectContent>
                    {apiEndpoints.map(ep => (
                      <SelectItem key={ep.id} value={ep.id}>{endpointLabels[ep.id]}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {currentEndpoint?.params.map(paramName => (
                <div key={paramName} className="col-span-1 md:col-span-1">
                  <Label htmlFor={`param-${paramName}`}>{paramLabels[paramName]}</Label>
                  <Input
                    id={`param-${paramName}`}
                    type="text"
                    value={params[paramName] || ""}
                    onChange={(e) => handleParamChange(paramName, e.target.value)}
                    placeholder={placeholderLabels[paramName]}
                    className="font-code"
                  />
                </div>
              ))}
            </div>

            <div className="p-4 rounded-md bg-muted/50 font-code text-sm break-all">
              {constructUrl()}
            </div>

            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                <Send className="mr-2 h-4 w-4" />
              )}
              Run Request
            </Button>
          </form>
        </CardContent>
      </Card>
      
      {response && (
        <div className="mt-8">
          <h2 className="text-2xl font-headline mb-2">Response</h2>
          <CodeBlock language="JSON" code={response} />
        </div>
      )}
    </div>
  );
}
