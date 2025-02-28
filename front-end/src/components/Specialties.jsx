import React, { useState } from "react";
import icon_specialties from '../assets/icon/icon_specialties.png';

const specialties = [
  { name: "Neurology", id: 1 },
  { name: "Bones", id: 2 },
  { name: "Oncology", id: 3 },
  { name: "Otorhinolaryngology", id: 4 },
  { name: "Ophthalmology", id: 5 },
  { name: "Cardiovascular", id: 6 },
  { name: "Pulmonology", id: 7 },
  { name: "Renal Medicine", id: 8 },
  { name: "Gastroenterology", id: 9 },
  { name: "Urology", id: 10 },
  { name: "Dermatology", id: 11 },
  { name: "Gynaecology", id: 12 },
];

const SpecialtiesGrid = () => {
  const [activeSpecialty, setActiveSpecialty] = useState(null);

  return (
    <div className="py-10">
      <h2 className="text-center text-xl font-semibold text-bimec-green uppercase mb-2">
        Always Caring
      </h2>
      <h3 className="text-center text-4xl font-yeseva text-bimec-heavy-green font-bold mb-10">
        Our Specialties
      </h3>
      <div className="grid grid-cols-3 gap-1 mx-auto max-w-4xl">
        {specialties.map((specialty) => (
          <div
            key={specialty.id}
            className={`flex flex-col items-center justify-center p-6 border rounded-lg cursor-pointer transition-colors ${
              activeSpecialty === specialty.id
                ? "bg-bimec-heavy-green text-white"
                : "bg-white text-bimec-green border-bimec-green hover:bg-bimec-green hover:text-white"
            }`}
            onClick={() => setActiveSpecialty(specialty.id)}
          >
            <div className="mb-2">
              <img 
                src={icon_specialties}
                alt={`${specialty.name} Icon`}
              />
            </div>
            <span className="font-medium">{specialty.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SpecialtiesGrid;
