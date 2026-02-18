import cvbilde from "./assets/cvbilde.jpg";
import geomatikk from "./assets/geomatikk.png"
import miljodirektoratet from "./assets/miljodirektoratet.png"
import {
  Mail,
} from "lucide-react";

const items = [
  {
    icon: geomatikk,
    isImage: true,
    title: "GeoSak 2",
    description:
      "Ansvar for fullstack-utvikling av 9 forskjellige .NET apper som til sammen utgjør GeoSak 2, et saksbehandlingsverktøy som brukes av majoriteten av norske kommuner. Leveranse av GeoSak 2 var etterspurt av ",
  },
  {
    icon: miljodirektoratet,
    isImage: true,
    title: "Miljøvedtaksregisteret",
    description:
      "Miljødirektoratet har fått utviklet en brukervennlig løsning for registrering av og innsyn i forskrifter. . Tidsbesparende for både direktoratet og for publikum.",
  },
  {
    icon: miljodirektoratet,
    isImage: true,
    title: "Hjorteviltregisteret",
    description:
      "Focused on performance, usability and elegant, minimal design systems.",
  },
  {
    icon: miljodirektoratet,
    isImage: true,
    title: "Fallvilt",
    description:
      "Contributing to open-source projects and sharing knowledge with the community.",
  },
  {
    icon: Mail,
    title: "Contact",
    description:
      "Open to new opportunities and interesting conversations.",
  },
];


export default function App() {
  return (
    <div className="min-h-screen">
      <div className="max-w-5xl mx-auto px-6 py-16">
        {/* Profile Section */}
        <div className="flex flex-col items-center text-center mb-16">
          <img
            src={cvbilde}
            alt="Henrik"
            className="w-40 h-40 rounded-full object-cover shadow-lg ring-4 ring-white"
          />
          <h1 className="mt-6 text-4xl font-semibold tracking-tight">
            Henrik Moe Wæhre
          </h1>
          <p className="mt-2 text-gray-500 text-base">
            Fullstack • CI/CD • Cloud
          </p>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {items.map((item, index) => {
            return (
              <div
                key={index}
                className="group rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1 hover:bg-gray-50"
              >
                <div className="p-8 flex flex-col items-center text-center">

                  <div className="mb-4 p-3 rounded-xl bg-gray-100 group-hover:bg-white transition-colors duration-300 shadow-sm">
                    {typeof item.icon === "string" ? (
                      <img src={item.icon} className="w-6 h-6 object-cover rounded" />
                    ) : (
                      <item.icon className="w-6 h-6" />
                    )}
                  </div>
                  <h3 className="text-lg font-medium mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}