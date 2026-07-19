interface Props {
  password: string;
}

export default function PasswordStrength({ password }: Props) {
  let score = 0;

  if (password.length >= 8) score++;
  if (/[A-Z]/.test(password)) score++;
  if (/[a-z]/.test(password)) score++;
  if (/\d/.test(password)) score++;
  if (/[^A-Za-z0-9]/.test(password)) score++;

  const percentage = (score / 5) * 100;

  let color = "bg-red-500";
  let text = "Weak";

  if (score >= 4) {
    color = "bg-green-500";
    text = "Strong";
  } else if (score >= 3) {
    color = "bg-yellow-500";
    text = "Good";
  }

  return (
    <div className="mt-2">
      <div className="w-full h-2 rounded-full bg-slate-700 overflow-hidden">
        <div
          className={`${color} h-full transition-all duration-300`}
          style={{ width: `${percentage}%` }}
        />
      </div>

      <p className="mt-2 text-sm text-slate-400">
        Password Strength:{" "}
        <span className="font-semibold">{text}</span>
      </p>
    </div>
  );
}