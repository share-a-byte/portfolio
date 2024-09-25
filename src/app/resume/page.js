export const metadata = {
  title: "Vani Ramesh's Resume ♡",
};

export default function ResumeOpener() {
  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <object
        data="/files/VANI_RESUME_2027.pdf"
        type="application/pdf"
        width="100%"
        height="100%"
      >
        <p className="flex flex-row min-h-screen justify-center items-center">
          Unable to display PDF file.&nbsp;
          <span className="underline text-cyan-200">
            <a href="/files/VANI_RESUME_2027.pdf">Download</a> instead.
          </span>
        </p>
      </object>
    </div>
  );
}
