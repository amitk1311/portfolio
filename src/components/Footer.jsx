export default function Footer() {
  return (
    <footer
      className="w-full z-40 bg-white/[0.06] backdrop-blur-md pb-20 md:pb-4"
    >
      {/* Gradient Divider */}
      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      {/* Footer Content */}
      <div className="text-center py-4 px-4">
        <p className="text-sm text-gray-400 break-words">
          © {new Date().getFullYear()}{" "}
          <span className="text-gray-300 font-medium">
            Amit Kumar Sah
          </span>
          . All rights reserved.
        </p>
      </div>
    </footer>
  );
}
