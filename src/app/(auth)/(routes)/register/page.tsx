import AuthForm from "@/components/auth-form";
import Link from "next/link";

export default function RegisterPage() {
  return (
    <div className="relative z-10 my-auto h-fit w-full max-w-md overflow-hidden">
      <div className="flex flex-col items-center justify-center space-y-3 px-4 py-6 pt-8 text-center sm:px-16">
        {/* <Icons.logo className="h-12 w-12 rounnde-xl" /> */}
        <h3 className="text-xl font-semibold text-primary">
          Create your PassForte account
        </h3>
        <p className="text-sm text-primary/70">
          Your All-in-One Password Management Solution for Keeping Your Digital
          World Secure
        </p>
      </div>
      <div className="flex flex-col space-y-3 px-4 py-6 sm:px-16">
        <AuthForm />

        <p className="text-center text-sm text-primary/50">
          {`Already have an account?`}{" "}
          <Link href="/register" className="font-semibold transition-colors">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
