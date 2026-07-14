import { motion } from "framer-motion";
import { Code2, Server, Layers3 } from "lucide-react";

const services = [
  {
    title: "Frontend Development",
    icon: Code2,
    description:
      "Crafting visually stunning and highly responsive user interfaces using modern frameworks like React and Next.js.",
    tech: ["React", "Next.js", "Tailwind", "Framer Motion"],
  },
  {
    title: "Backend Development",
    icon: Server,
    description:
      "Designing secure, scalable server-side logic and robust database architectures to power modern web applications.",
    tech: ["Node.js", "MongoDB", "Express", "PostgreSQL"],
  },
  {
    title: "Full Stack Development",
    icon: Layers3,
    description:
      "Providing complete end-to-end web solutions with seamless frontend and backend integration.",
    tech: ["MERN Stack", "Next.js Fullstack", "REST API"],
  },
];

function ServicesSection() {
  return (
    <section
      id="services"
      className="pt-[80px] pb-[40px] px-4 bg-secondary/30"
    >
      <div className="container mx-auto">

        {/* Heading */}

        <div className="mb-14">
          <p className="uppercase tracking-[8px] text-primary text-sm font-semibold">
            Features
          </p>

          <h2 className="text-4xl md:text-6xl font-bold mt-3">
            My <span className="text-primary">Services</span>
          </h2>

          <div className="w-24 h-1 bg-primary mt-6 rounded-full"></div>
        </div>

        {/* Cards */}

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

          {services.map((service, index) => {

            const Icon = service.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.15,
                }}
                whileHover={{
                  y: -10,
                  scale: 1.02,
                }}
                className="bg-card border border-primary/20 rounded-[28px] p-8 card-hover"
              >

                {/* Icon */}

                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-8">
                  <Icon className="text-primary w-8 h-8" />
                </div>

                {/* Title */}

                <h3 className="text-2xl font-bold mb-5">
                  {service.title}
                </h3>

                {/* Description */}

                <p className="text-muted-foreground leading-8 mb-8 text-gray-300">
                  {service.description}
                </p>

                {/* Tags */}

                <div className="flex flex-wrap gap-3">

                  {service.tech.map((item, i) => (
                    <span
                      key={i}
                      className="
                      px-4
                      py-2
                      rounded-full
                      text-sm
                      font-medium
                      border
                      border-primary/20
                      bg-primary/10
                      text-primary
                      "
                    >
                      {item}
                    </span>
                  ))}

                </div>

              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;