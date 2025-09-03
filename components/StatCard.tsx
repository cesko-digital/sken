type Props = {
  value: string;
  label: string;
  description?: string;
  color?: "blue" | "green" | "orange" | "purple" | "red";
};

export const StatCard = ({
  value,
  label,
  description,
  color = "blue",
}: Props) => {
  const palette = {
    blue: "bg-blue-50 border-blue-200 text-blue-800",
    green: "bg-green-50 border-green-200 text-green-800",
    orange: "bg-orange-50 border-orange-200 text-orange-800",
    purple: "bg-purple-50 border-purple-200 text-purple-800",
    red: "bg-red-50 border-red-200 text-red-800",
  };

  return (
    <div
      className={`p-5 rounded-lg border-2 ${palette[color]} mb-4 flex items-center justify-center text-center`}
    >
      <div>
        <div className="text-3xl font-bold mb-2">{value}</div>
        <div className="text-lg font-semibold mb-1">{label}</div>
        {description && <div className="text-sm opacity-80">{description}</div>}
      </div>
    </div>
  );
};
