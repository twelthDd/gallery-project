

const mockUrls = [
  "https://utfs.io/f/e2fe85e6-8f1d-44ad-9f27-10a4699e4087-eanuzn.JPG",
  "https://utfs.io/f/b0a54cda-02a3-4374-ba47-c9e492aae048-eanuzl.JPG",
  "https://utfs.io/f/4502f48d-d75e-4493-8037-07a7aa474bfb-eanuzp.JPG"
  ]
const mockImages = mockUrls.map((url, index) => ({
  id: index + 1, 
  url}) )
export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
          {[...mockImages, ...mockImages, ...mockImages].map((image) => (
            <div key={image.id} className="w-48">
              <img src={image.url} />
            </div>
          ))}
      </div>

    </main>
  );
}
