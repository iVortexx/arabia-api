
"use client";
import React, { useEffect } from 'react';
import {
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarInset,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarTrigger,
  useSidebar
} from "@/components/ui/sidebar";
import { Globe, BookText, Search, Braces, MapPin, Building, Sparkles } from 'lucide-react';

const sections = [
  { id: 'introduction', label: 'Introduction', icon: BookText },
  { id: 'endpoints', label: 'Endpoints', icon: Braces, isTitle: true },
  { id: 'get-countries', label: 'Get All Countries', icon: Globe },
  { id: 'get-country-by-code', label: 'Get Country by Code', icon: Globe },
  { id: 'get-code-by-country-name', label: 'Get Code by Name', icon: Globe },
  { id: 'get-cities-by-country', label: 'Get Cities by Country', icon: Building },
  { id: 'get-cities', label: 'Get All Cities', icon: MapPin },
  { id: 'search', label: 'Search', icon: Search },
  { id: 'utilities', label: 'Utilities', icon: Sparkles, isTitle: true },
  { id: 'random-country', label: 'Get Random Country', icon: Globe },
  { id: 'random-city', label: 'Get Random City', icon: MapPin },
];

function SidebarNavigation() {
  const { isMobile, setOpenMobile } = useSidebar();

  const handleLinkClick = (event: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    event.preventDefault();
    const newUrl = window.location.pathname + window.location.search + '#' + sectionId;
    // Use pushState to change the URL without a page jump
    history.pushState(null, '', newUrl);
    // Manually trigger the hashchange event so the page component can react
    window.dispatchEvent(new HashChangeEvent('hashchange', { newURL: newUrl }));

    if (isMobile) {
      setOpenMobile(false);
    }
  };

  return (
    <SidebarMenu>
      {sections.map((section) => (
        <SidebarMenuItem key={section.id}>
          {section.isTitle ? (
            <h3 className="px-2 py-1 text-sm font-semibold text-muted-foreground font-headline">{section.label}</h3>
          ) : (
            <SidebarMenuButton asChild variant="ghost" className="justify-start">
              <a
                href={`#${section.id}`}
                onClick={(e) => section.id && handleLinkClick(e, section.id)}
              >
                <section.icon className="h-4 w-4" />
                <span>{section.label}</span>
              </a>
            </SidebarMenuButton>
          )}
        </SidebarMenuItem>
      ))}
    </SidebarMenu>
  );
}


export default function DocsLayout({ children }: { children: React.ReactNode }) {
    useEffect(() => {
        const header = document.querySelector('header');
        if (header) {
            const updateHeaderHeight = () => {
                document.documentElement.style.setProperty('--header-height', `${header.offsetHeight}px`);
            };
            
            updateHeaderHeight();
            window.addEventListener('resize', updateHeaderHeight);

            document.fonts.ready.then(updateHeaderHeight);

            return () => {
                window.removeEventListener('resize', updateHeaderHeight);
            };
        }
    }, []);

    return (
        <SidebarProvider>
            <Sidebar>
                <SidebarHeader className='p-4'>
                    <div className="flex items-center gap-2">
                       <h2 className="text-lg font-semibold font-headline">API Documentation</h2>
                       <div className="md:hidden ml-auto">
                            <SidebarTrigger />
                       </div>
                    </div>
                </SidebarHeader>
                <SidebarContent>
                    <SidebarNavigation />
                </SidebarContent>
            </Sidebar>
            <SidebarInset>
                 <div className="container mx-auto p-4 md:p-8">
                   {children}
                </div>
            </SidebarInset>
        </SidebarProvider>
    );
}
