import Link from "next/link";

export function StoreButtons() {
  return (
    <div className="mt-auto space-y-2">
      {/* Google Play Button */}
      <Link
        href="#"
        className="h-[40px] px-4 bg-background rounded flex items-center gap-2 border border-muted-foreground"
      >
        <svg
          viewBox="0 0 24 24"
          className="w-6 h-6 text-current"
          fill="currentColor"
        >
          <path d="M3.609 1.814L13.792 12 3.61 22.186a2.372 2.372 0 0 1-.497-.544 2.371 2.371 0 0 1-.382-1.311V3.669c0-.472.132-.902.382-1.311.138-.222.303-.412.496-.544zm.877-.77l10.549 10.55 2.815-2.815L4.486 1.044zM17.766 9.2l-2.816 2.815 2.816 2.815 3.516-2.815L17.766 9.2zm-3.542 3.543L3.676 23.293l13.364-7.735-2.816-2.815z" />
        </svg>
        <div className="flex flex-col">
          <span className="text-[10px] text-muted-foreground leading-none">
            GET IT ON
          </span>
          <span className="text-sm font-medium text-foreground">
            Google Play
          </span>
        </div>
      </Link>

      {/* App Store Button */}
      <Link
        href="#"
        className="h-[40px] px-4 bg-background rounded flex items-center gap-2 border border-muted-foreground"
      >
        <svg
          viewBox="0 0 24 24"
          className="w-7 h-7 text-current"
          fill="currentColor"
        >
          <path d="M17.05 20.28c-.98.954-2.035 1.052-3.114.432-1.13-.657-2.165-.668-3.335 0-1.474.84-2.285.61-3.23-.433C2.344 14.834 3.505 6.727 8.435 6.435c1.404.068 2.36.83 3.046.864.895-.106 1.75-.87 3.046-.864 1.227.057 2.272.425 3.115 1.27-2.733 1.654-2.3 5.74.408 6.884-.384 1.194-.943 2.368-1 2.688zM12.98 6.245c-.145-1.993 1.45-3.725 3.27-3.855.252 2.18-1.69 3.987-3.27 3.855z" />
        </svg>
        <div className="flex flex-col">
          <span className="text-[10px] text-muted-foreground leading-none">
            Download on the
          </span>
          <span className="text-sm font-medium textforeground">App Store</span>
        </div>
      </Link>
    </div>
  );
}
