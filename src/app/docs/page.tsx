
"use client";

import { useState, useEffect } from "react";
import { CodeBlock } from "@/components/code-block";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ApiDocsPage = () => {
  const [baseUrl, setBaseUrl] = useState("");
  const [openAccordion, setOpenAccordion] = useState<string | undefined>();

  useEffect(() => {
    setBaseUrl(window.location.origin);

    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "");
      if (hash) {
        setOpenAccordion(hash);
        // The accordion animation is 200ms. We wait a bit longer to ensure
        // the scroll happens after the animation is complete.
        setTimeout(() => {
          const element = document.getElementById(hash);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 250);
      }
    };

    handleHashChange(); // Check hash on initial load
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const apiEndpoints = [
    {
      id: "get-countries",
      title: "Get All Countries",
      description: "Retrieves a list of all supported countries.",
      method: "GET",
      path: "/api/countries",
      params: [
        { name: "lang", description: "Set to `ar` for Arabic response. Defaults to English.", required: false },
      ],
      curl: `curl "${baseUrl}/api/countries"`,
      js: `fetch('${baseUrl}/api/countries')
  .then(res => res.json())
  .then(console.log);`,
      python: `import requests

response = requests.get('${baseUrl}/api/countries')
print(response.json())`
    },
    {
      id: "get-country-by-code",
      title: "Get Country by Code",
      description: "Retrieves a single country and its cities by the two-letter country code (ISO 3166-1 alpha-2).",
      method: "GET",
      path: "/api/countries/:code",
       params: [
        { name: "lang", description: "Set to `ar` for Arabic response. Defaults to English.", required: false },
      ],
      curl: `curl "${baseUrl}/api/countries/EG"`,
      js: `fetch('${baseUrl}/api/countries/EG')
  .then(res => res.json())
  .then(console.log);`,
      python: `import requests

response = requests.get('${baseUrl}/api/countries/EG')
print(response.json())`
    },
    {
      id: "get-code-by-country-name",
      title: "Get Code by Country Name",
      description: "Retrieves a country's code by its English or Arabic name.",
      method: "GET",
      path: "/api/countries/code/:name",
       params: [],
      curl: `curl "${baseUrl}/api/countries/code/Egypt"`,
      js: `fetch('${baseUrl}/api/countries/code/Egypt')
  .then(res => res.json())
  .then(console.log);`,
      python: `import requests

response = requests.get('${baseUrl}/api/countries/code/Egypt')
print(response.json())`
    },
    {
      id: "get-cities-by-country",
      title: "Get Cities by Country",
      description: "Retrieves all cities for a specific country by its code.",
      method: "GET",
      path: "/api/countries/:code/cities",
      params: [
        { name: "lang", description: "Set to `ar` for Arabic response. Defaults to English.", required: false },
      ],
      curl: `curl "${baseUrl}/api/countries/SA/cities"`,
      js: `fetch('${baseUrl}/api/countries/SA/cities')
  .then(res => res.json())
  .then(console.log);`,
      python: `import requests

response = requests.get('${baseUrl}/api/countries/SA/cities')
print(response.json())`
    },
    {
      id: "get-cities",
      title: "Get All Cities",
      description: "Retrieves a list of all cities across all countries. Can be filtered by country.",
      method: "GET",
      path: "/api/cities",
      params: [
        { name: "country", description: "Filter cities by a two-letter country code (e.g., `EG`).", required: false },
        { name: "lang", description: "Set to `ar` for Arabic response. Defaults to English.", required: false },
      ],
      curl: `curl "${baseUrl}/api/cities?country=AE&lang=en"`,
      js: `fetch('${baseUrl}/api/cities?country=AE&lang=en')
  .then(res => res.json())
  .then(console.log);`,
      python: `import requests

params = {
    'country': 'AE',
    'lang': 'en'
}
response = requests.get('${baseUrl}/api/cities', params=params)
print(response.json())`
    },
    {
      id: "search",
      title: "Search",
      description: "Performs a search for countries and cities. The search supports queries in both English and Arabic.",
      method: "GET",
      path: "/api/search",
      params: [
        { name: "q", description: "The search term. Can be in Arabic or English.", required: true },
        { name: "lang", description: "Set to `ar` for Arabic response. Defaults to English.", required: false },
      ],
      curl: `curl "${baseUrl}/api/search?q=cairo"`,
      js: `fetch('${baseUrl}/api/search?q=Dubai&lang=en')
  .then(res => res.json())
  .then(console.log);`,
      python: `import requests

params = {
    'q': 'Dubai',
    'lang': 'en'
}
response = requests.get('${baseUrl}/api/search', params=params)
print(response.json())`
    },
    {
      id: "random-country",
      title: "Get Random Country",
      description: "Retrieves a single random country.",
      method: "GET",
      path: "/api/countries/random",
      params: [
        { name: "lang", description: "Set to `ar` for Arabic response. Defaults to English.", required: false },
      ],
      curl: `curl "${baseUrl}/api/countries/random"`,
      js: `fetch('${baseUrl}/api/countries/random')
  .then(res => res.json())
  .then(console.log);`,
      python: `import requests

response = requests.get('${baseUrl}/api/countries/random')
print(response.json())`
    },
    {
      id: "random-city",
      title: "Get Random City",
      description: "Retrieves a single random city from any country.",
      method: "GET",
      path: "/api/cities/random",
      params: [
        { name: "lang", description: "Set to `ar` for Arabic response. Defaults to English.", required: false },
      ],
      curl: `curl "${baseUrl}/api/cities/random"`,
      js: `fetch('${baseUrl}/api/cities/random')
  .then(res => res.json())
  .then(console.log);`,
      python: `import requests

response = requests.get('${baseUrl}/api/cities/random')
print(response.json())`
    },
  ];

  return (
    <div className="prose prose-lg dark:prose-invert">
       <section id="introduction" className="mb-12 scroll-mt-20">
         <h1 className="font-headline text-4xl m-0">Documentation</h1>
         <p className="lead">Welcome to the Arabia API Hub documentation. Our API provides a simple and powerful way to access data about countries and cities in the Arab world. All endpoints support both English and Arabic responses via the `lang` query parameter.</p>
       </section>

      <Accordion type="single" value={openAccordion} onValueChange={setOpenAccordion} collapsible className="w-full">
        {apiEndpoints.map((endpoint) => (
          <AccordionItem key={endpoint.id} value={endpoint.id} id={endpoint.id} className="scroll-mt-20 border-b">
            <AccordionTrigger className="text-left hover:no-underline">
              <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 w-full">
                <div className="flex items-center gap-4">
                  <Badge variant={endpoint.method === 'GET' ? 'default' : 'secondary'} className="text-sm w-[60px] flex justify-center">{endpoint.method}</Badge>
                  <code className="text-lg font-bold font-code text-foreground">{endpoint.path}</code>
                </div>
                <p className="text-sm font-normal text-muted-foreground md:ml-auto text-left flex-1">{endpoint.title}</p>
              </div>
            </AccordionTrigger>
            <AccordionContent className="p-4 bg-background dark:bg-muted/20 rounded-b-md">
              <p className="mt-0">{endpoint.description}</p>

              {endpoint.params.length > 0 && (
                <>
                  <h4 className="font-headline text-base mt-6 mb-2">Query Parameters</h4>
                  <ul className="my-0">
                    {endpoint.params.map(param => (
                       <li key={param.name}>
                        <code>{param.name}</code> {param.required ? `(required)` : `(optional)`}: <span dangerouslySetInnerHTML={{ __html: param.description }} />
                       </li>
                    ))}
                  </ul>
                </>
              )}

              <h4 className="font-headline text-base mt-6 mb-2">Example</h4>
                <Tabs defaultValue="curl" className="w-full">
                    <TabsList>
                        <TabsTrigger value="curl">cURL</TabsTrigger>
                        <TabsTrigger value="javascript">JavaScript</TabsTrigger>
                        <TabsTrigger value="python">Python</TabsTrigger>
                    </TabsList>
                    <TabsContent value="curl">
                        <CodeBlock language="bash" code={endpoint.curl} />
                    </TabsContent>
                    <TabsContent value="javascript">
                        <CodeBlock language="javascript" code={endpoint.js} />
                    </TabsContent>
                    <TabsContent value="python">
                        <CodeBlock language="python" code={endpoint.python} />
                    </TabsContent>
                </Tabs>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default ApiDocsPage;
