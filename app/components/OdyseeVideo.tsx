export default function OdyseeVideo() {
  return (
    <div className="relative w-full max-w-4xl mx-auto aspect-video overflow-hidden rounded-xl bg-black">
      <iframe
        src="https://odysee.com/$/embed/@lucasmurrey:9/1-Lucas+Moe:2"
        className="absolute inset-0 h-full w-full"
        allowFullScreen
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        title="1: Lucas + Moe"
      />
    </div>
  );
}