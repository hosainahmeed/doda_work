import React from "react";
import { FiMail, FiGlobe, FiPhone } from "react-icons/fi";
import { FaBuilding, FaUserTie, FaClock } from "react-icons/fa";
import { Divider } from "antd";

function RequestedUser({ record }) {
  if (!record) return null;

  const data = [
    { title: "Email", value: record.email, icon: <FiMail /> },
    { title: "Website", value: record.website_link, icon: <FiGlobe /> },
    { title: "Company", value: record.company_name, icon: <FaBuilding /> },
    { title: "Contact Person", value: record.contact_person, icon: <FaUserTie /> },
    { title: "Working Hours", value: `${record.working_hours}, Weekend: ${record.weekend}`, icon: <FaClock /> },
    { title: "Phone", value: record.phone, icon: <FiPhone /> },
    { title: "Request Date", value: new Date(record.createdAt).toLocaleDateString() },
  ]

  return (
    <div className="max-w-md mx-auto">
      {/* Avatar + Name */}
      <div className="flex items-center gap-4 mb-6">
        <img
          src={record.avatar}
          alt={record.name}
          className="w-20 h-20 rounded-full object-cover border-2 border-[#F57C00] shadow-sm"
        />
        <div>
          <h2 className="text-xl font-semibold text-[#111111]">{record.name}</h2>
          <p className="text-sm text-gray-500">{record.category} • {record.sub_category}</p>
        </div>
      </div>
      <Divider />

      {/* Info List */}
      <div className="space-y-3 text-sm">
        {data.map((item, index) => (
          <InfoRow key={index} icon={item.icon} label={item.title} value={item.value} />
        ))}
      </div>
    </div>
  );
}

function InfoRow({ icon, label, value, isLink }) {
  if (!value) return null;

  return (
    <div className="flex items-start gap-2">
      {icon && <span className="text-[#F57C00] mt-0.5">{icon}</span>}
      <div className="flex gap-2 items-center">
        <p className="text-gray-600 font-medium">{label}</p>
        {isLink ? (
          <a
            href={value}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#111111] font-semibold hover:text-[#F57C00] transition"
          >
            {value}
          </a>
        ) : (
          <p className="text-[#111111] font-semibold">{value}</p>
        )}
      </div>
    </div>
  );
}

export default RequestedUser;
