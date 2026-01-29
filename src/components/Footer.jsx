export default function Footer() {
  return (
    <footer
      className="fixed bottom-0 left-0 w-full z-40
                 bg-[#0b0f14]/70 backdrop-blur-md"
    >
      {/* Gradient Divider */}
      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      {/* Footer Content */}
      <div className="text-center py-3">
        <p className="text-xs text-gray-500">
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
