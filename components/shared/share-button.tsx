"use client";

interface ShareButtonsProps {
  title: string;
  url: string;
  className?: string;
}

export default function ShareButtons({
  title,
  url,
  className = "",
}: ShareButtonsProps) {
  const showNotification = (message: string) => {
    const notification = document.createElement("div");
    notification.className =
      "fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-black text-white px-4 py-2 rounded-lg shadow-lg";
    notification.textContent = message;
    document.body.appendChild(notification);

    setTimeout(() => {
      notification.remove();
    }, 3000);
  };

  const shareLinks = [
    {
      name: "Facebook",
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
        </svg>
      ),
      action: () =>
        window.open(
          `https://www.facebook.com/sharer/sharer.php?u=${url}`,
          "_blank"
        ),
    },
    {
      name: "Twitter",
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
        </svg>
      ),
      action: () =>
        window.open(
          `https://twitter.com/intent/tweet?text=${title}&url=${url}`,
          "_blank"
        ),
    },
    {
      name: "LinkedIn",
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      ),
      action: () =>
        window.open(
          `https://www.linkedin.com/shareArticle?mini=true&url=${url}&title=${title}`,
          "_blank"
        ),
    },
    {
      name: "Copy Link",
      icon: (
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"
          />
        </svg>
      ),
      action: async () => {
        try {
          await navigator.clipboard.writeText(url);
          showNotification("Link copied to clipboard!");
        } catch (err) {
          console.error(err);
          showNotification("Failed to copy link");
        }
      },
    },
  ];

  const handleShare = async (customAction?: () => void) => {
    if (customAction) {
      customAction();
      return;
    }

    if (navigator.share) {
      try {
        await navigator.share({
          title,
          url,
        });
        showNotification("Shared successfully!");
      } catch (err) {
        if (err instanceof Error && err.name !== "AbortError") {
          showNotification("Error sharing content");
        }
      }
    } else {
      showNotification("Sharing not supported on this device");
    }
  };

  return (
    <div className={`${className} flex md:flex-col gap-4`}>
      {shareLinks.map((link) => (
        <button
          key={link.name}
          onClick={() => handleShare(link.action)}
          className="p-2 text-gray-600 hover:text-gray-900 bg-gray-100 rounded-full transition-colors duration-200"
          aria-label={`Share on ${link.name}`}
        >
          {link.icon}
        </button>
      ))}
    </div>
  );
}
