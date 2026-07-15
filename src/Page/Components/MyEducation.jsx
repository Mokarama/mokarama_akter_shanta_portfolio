import React from "react";

function MyEducation() {
  const educationData = [
    {
      title: "Complete Web Development Course(L-2)",
      institution: "Programming Hero",
      year: "2026",
    },
    {
      title: "Bachelor of Arts (Honours) in Bangla",
      institution: "National University, Bangladesh",
      details: "📅 2026",
    },
    {
      title: "HSC (2022-23)",
      institution: "Kishoreganj Government Mohila College",
      details: "📅 2020",
    },
  ];

  return (
    <section className="pt-[80px]   bg-secondary/30">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
            My <span className="text-primary">Education</span>
          </h2>

      <div className="container mx-auto   flex flex-col md:flex-row items-center md:gap-[60px] gap-3">
        {/* Left Side - Image */}
        <div className="flex-1">
          <img
            src="https://i.ibb.co.com/tG7MN9y/banner-webp-91e6f7b2-78f7-47b2-ad10-7d74a817fb96.jpg"
            alt="School"
            className="rounded-lg shadow-lg object-cover w-full h-full md:h-[403px]"
          />
        </div>

        {/* Right Side - Education Details */}
        <div className="md:flex-1  w-full">
        
          <div className="grid gap-6">
            {educationData.map((edu, index) => (
              <div
                key={index}
                className="bg-card p-6 rounded-lg shadow-md border border-border card-hover"
              >
                <h3 className="text-xl font-semibold text-primary">
                  {edu.title}
                </h3>
                <p className="text-muted-foreground">{edu.institution}</p>
                {edu.year && (
                  <p className="text-sm text-gray-500 mt-1">📅 {edu.year}</p>
                )}
                {edu.details && (
                  <p className="text-sm text-gray-500 mt-1">{edu.details}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default MyEducation;
