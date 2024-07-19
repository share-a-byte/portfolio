export default function Skills() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32" id="skills">
      <div className="container mx-auto px-4 md:px-6">
        <div className="space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            My Skills
          </h2>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Here are some of the technologies and tools I'm proficient in.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mt-8">
          <Skill
            text="TensorFlow"
            icon={<TensorFlowIcon className="h-8 w-8" />}
          ></Skill>
          <Skill icon={<ReactIcon className="h-8 w-8" />} text="React.js" />
          <Skill icon={<LeafIcon className="h-8 w-8" />} text="Node.js" />
          <Skill
            text="Python"
            icon={<PythonIcon className="h-8 w-8" />}
          ></Skill>
          <Skill icon={<WindIcon className="h-8 w-8" />} text="Tailwind CSS" />
          <Skill icon={<DatabaseIcon className="h-8 w-8" />} text="MongoDB" />
          <Skill text="MySQL" icon={<MySQL className="h-8 w-8" />}></Skill>
          <Skill text="Flask" icon={<FlaskIcon className="h-8 w-8" />}></Skill>
          <Skill
            text="Javascript"
            icon={<JavascriptIcon className="h-8 w-8" />}
          ></Skill>
          <Skill icon={<GitGraphIcon className="h-8 w-8" />} text="Git" />
          <Skill text="C++" icon={<CIcon className="h-8 w-8" />}></Skill>
          <Skill
            text="PostgreSQL"
            icon={<PostgreIcon className="h-8 w-8" />}
          ></Skill>
          <Skill text="Java" icon={<JavaIcon className="h-8 w-8" />}></Skill>
          <Skill
            text="OpenAI"
            icon={<OpenAIIcon className="h-8 w-8" />}
          ></Skill>

          <Skill text="Next.js" icon={<NextIcon className="h-8 w-8" />}></Skill>
        </div>
      </div>
    </section>
  );
}

function MySQL(props) {
  return (
    <svg
      viewBox="0 0 128 128"
      width="60"
      height="60"
      preserveAspectRatio="xMidYMin"
    >
      <path
        fill="#ffffff"
        d="M116.948 97.807c-6.863-.187-12.104.452-16.585 2.341-1.273.537-3.305.552-3.513 2.147.7.733.809 1.829 1.365 2.731 1.07 1.73 2.876 4.052 4.488 5.268 1.762 1.33 3.577 2.751 5.465 3.902 3.358 2.047 7.107 3.217 10.34 5.268 1.906 1.21 3.799 2.733 5.658 4.097.92.675 1.537 1.724 2.732 2.147v-.194c-.628-.8-.79-1.898-1.366-2.733l-2.537-2.537c-2.48-3.292-5.629-6.184-8.976-8.585-2.669-1.916-8.642-4.504-9.755-7.609l-.195-.195c1.892-.214 4.107-.898 5.854-1.367 2.934-.786 5.556-.583 8.585-1.365l4.097-1.171v-.78c-1.531-1.571-2.623-3.651-4.292-5.073-4.37-3.72-9.138-7.437-14.048-10.537-2.724-1.718-6.089-2.835-8.976-4.292-.971-.491-2.677-.746-3.318-1.562-1.517-1.932-2.342-4.382-3.511-6.633-2.449-4.717-4.854-9.868-7.024-14.831-1.48-3.384-2.447-6.72-4.293-9.756-8.86-14.567-18.396-23.358-33.169-32-3.144-1.838-6.929-2.563-10.929-3.513-2.145-.129-4.292-.26-6.438-.391-1.311-.546-2.673-2.149-3.902-2.927C17.811 4.565 5.257-2.16 1.633 6.682c-2.289 5.581 3.421 11.025 5.462 13.854 1.434 1.982 3.269 4.207 4.293 6.438.674 1.467.79 2.938 1.367 4.489 1.417 3.822 2.652 7.98 4.487 11.511.927 1.788 1.949 3.67 3.122 5.268.718.981 1.951 1.413 2.145 2.927-1.204 1.686-1.273 4.304-1.95 6.44-3.05 9.615-1.899 21.567 2.537 28.683 1.36 2.186 4.567 6.871 8.975 5.073 3.856-1.57 2.995-6.438 4.098-10.732.249-.973.096-1.689.585-2.341v.195l3.513 7.024c2.6 4.187 7.212 8.562 11.122 11.514 2.027 1.531 3.623 4.177 6.244 5.073v-.196h-.195c-.508-.791-1.303-1.119-1.951-1.755-1.527-1.497-3.225-3.358-4.487-5.073-3.556-4.827-6.698-10.11-9.561-15.609-1.368-2.627-2.557-5.523-3.709-8.196-.444-1.03-.438-2.589-1.364-3.122-1.263 1.958-3.122 3.542-4.098 5.854-1.561 3.696-1.762 8.204-2.341 12.878-.342.122-.19.038-.391.194-2.718-.655-3.672-3.452-4.683-5.853-2.554-6.07-3.029-15.842-.781-22.829.582-1.809 3.21-7.501 2.146-9.172-.508-1.666-2.184-2.63-3.121-3.903-1.161-1.574-2.319-3.646-3.124-5.464-2.09-4.731-3.066-10.044-5.267-14.828-1.053-2.287-2.832-4.602-4.293-6.634-1.617-2.253-3.429-3.912-4.683-6.635-.446-.968-1.051-2.518-.391-3.513.21-.671.508-.951 1.171-1.17 1.132-.873 4.284.29 5.462.779 3.129 1.3 5.741 2.538 8.392 4.294 1.271.844 2.559 2.475 4.097 2.927h1.756c2.747.631 5.824.195 8.391.975 4.536 1.378 8.601 3.523 12.292 5.854 11.246 7.102 20.442 17.21 26.732 29.269 1.012 1.942 1.45 3.794 2.341 5.854 1.798 4.153 4.063 8.426 5.852 12.488 1.786 4.052 3.526 8.141 6.05 11.513 1.327 1.772 6.451 2.723 8.781 3.708 1.632.689 4.307 1.409 5.854 2.34 2.953 1.782 5.815 3.903 8.586 5.855 1.383.975 5.64 3.116 5.852 4.879zM29.729 23.466c-1.431-.027-2.443.156-3.513.389v.195h.195c.683 1.402 1.888 2.306 2.731 3.513.65 1.367 1.301 2.732 1.952 4.097l.194-.193c1.209-.853 1.762-2.214 1.755-4.294-.484-.509-.555-1.147-.975-1.755-.556-.811-1.635-1.272-2.339-1.952z"
      ></path>
    </svg>
  );
}

function OpenAIIcon(props) {
  return (
    <svg
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      width="55.000000pt"
      height="55.000000pt"
      viewBox="0 0 300.000000 300.000000"
      preserveAspectRatio="xMidYMid meet"
    >
      {" "}
      <g
        transform="translate(0.000000,300.000000) scale(0.100000,-0.100000)"
        fill="#ffffff"
        stroke="none"
      >
        {" "}
        <path d="M1242 2626 c-154 -38 -311 -161 -384 -302 -36 -68 -40 -72 -96 -93 -267 -97 -436 -397 -378 -671 15 -69 60 -175 106 -245 16 -25 17 -37 10 -70 -15 -62 -12 -191 6 -259 28 -111 72 -184 164 -277 128 -128 249 -179 433 -179 87 0 88 0 139 -41 111 -88 231 -129 373 -129 232 0 416 114 536 333 24 44 34 52 103 82 230 100 370 310 370 555 0 117 -25 204 -88 310 -42 70 -44 78 -36 115 14 60 12 182 -5 253 -26 108 -78 198 -169 287 -125 124 -250 175 -429 175 l-89 0 -56 45 c-66 51 -164 98 -240 114 -69 14 -203 13 -270 -3z m254 -37 c80 -14 190 -69 252 -124 l50 -45 69 6 c141 13 304 -40 415 -136 57 -49 128 -154 158 -235 28 -76 37 -227 18 -300 l-14 -50 42 -62 c107 -158 129 -352 60 -522 -60 -148 -186 -267 -333 -317 -63 -21 -63 -21 -100 -95 -92 -186 -290 -309 -498 -309 -130 0 -271 52 -363 135 l-50 45 -69 -6 c-141 -13 -304 40 -415 136 -57 49 -128 154 -158 235 -28 76 -37 227 -18 300 l14 50 -42 62 c-152 223 -128 511 58 702 58 60 149 118 220 139 57 18 58 19 94 92 26 52 59 97 108 146 135 135 309 188 502 153z" />{" "}
        <path d="M1316 2450 c-120 -21 -241 -110 -294 -217 -45 -88 -52 -150 -52 -439 l0 -262 95 -55 95 -56 0 318 c0 261 3 320 15 337 8 12 115 79 239 150 124 71 224 134 222 139 -4 16 -76 54 -131 70 -70 20 -132 25 -189 15z m181 -57 c29 -9 53 -22 53 -28 0 -7 -87 -62 -192 -124 -136 -78 -200 -121 -215 -144 -23 -33 -23 -39 -23 -310 0 -307 3 -296 -65 -256 l-36 22 3 301 c3 295 3 302 27 346 53 100 118 158 214 191 66 23 165 24 234 2z" />{" "}
        <path d="M1790 2265 c-25 -8 -153 -77 -285 -154 l-240 -139 -3 -112 -3 -112 28 19 c92 63 524 303 546 303 15 0 122 -56 257 -135 l232 -135 -4 93 c-3 73 -10 103 -31 148 -52 109 -147 191 -256 223 -66 19 -180 20 -241 1z m275 -59 c67 -31 144 -101 173 -159 28 -56 49 -145 36 -156 -5 -6 -57 19 -129 61 -209 122 -280 158 -314 158 -34 0 -74 -21 -335 -172 -93 -54 -173 -98 -178 -98 -5 0 -8 25 -6 56 l3 57 180 105 c302 175 323 184 442 177 50 -2 90 -11 128 -29z" />{" "}
        <path d="M780 2035 c-195 -100 -274 -342 -175 -541 51 -104 106 -148 374 -302 l232 -133 96 55 c91 52 94 55 72 66 -68 35 -516 295 -531 308 -16 13 -18 43 -20 292 l-3 278 -45 -23z m0 -267 c0 -117 5 -229 10 -249 5 -19 22 -47 37 -61 22 -21 182 -118 318 -193 95 -52 155 -91 152 -100 -6 -17 -81 -55 -97 -49 -53 19 -444 257 -484 294 -125 116 -149 315 -54 462 28 45 93 108 110 108 5 0 8 -96 8 -212z" />{" "}
        <path d="M1691 1886 c-89 -52 -92 -55 -70 -66 68 -35 517 -295 532 -308 15 -14 17 -41 17 -294 l0 -278 43 21 c102 51 173 137 208 250 45 144 5 301 -105 407 -34 34 -128 94 -288 186 -130 75 -238 136 -240 136 -2 0 -45 -25 -97 -54z m228 -68 c355 -202 398 -235 449 -346 21 -47 26 -72 26 -143 1 -79 -2 -91 -37 -161 -24 -49 -53 -90 -79 -112 -23 -20 -45 -36 -48 -36 -14 0 -20 79 -20 279 l0 203 -37 37 c-21 20 -136 92 -256 161 -119 68 -216 129 -214 135 3 9 74 54 86 55 2 0 61 -32 130 -72z" />{" "}
        <path d="M1373 1702 l-113 -67 0 -135 0 -136 113 -64 c61 -36 119 -65 127 -65 8 0 66 29 128 65 l112 64 0 136 0 135 -117 68 c-64 37 -121 67 -127 66 -6 -1 -62 -31 -123 -67z m210 -23 c112 -65 107 -56 107 -179 0 -89 -3 -109 -17 -122 -25 -22 -159 -98 -172 -98 -6 0 -52 23 -101 51 l-90 51 0 117 0 117 88 51 c48 29 93 52 100 53 8 0 46 -19 85 -41z" />{" "}
        <path d="M1840 1261 c0 -261 -3 -320 -15 -337 -8 -12 -115 -79 -239 -150 -124 -71 -224 -133 -223 -139 5 -19 133 -75 194 -85 164 -27 339 63 420 216 45 84 53 152 53 445 l0 257 -95 55 -95 56 0 -318z m136 174 c3 -11 4 -147 2 -301 l-3 -281 -36 -69 c-28 -54 -49 -79 -98 -116 -79 -61 -148 -82 -250 -76 -71 4 -141 27 -141 47 0 4 69 48 153 96 83 48 166 96 184 107 17 10 45 35 62 54 l31 35 0 278 c0 153 3 281 6 284 12 11 84 -36 90 -58z" />{" "}
        <path d="M1710 1231 c-83 -58 -521 -301 -543 -301 -15 0 -122 57 -257 135 l-232 135 4 -92 c5 -107 31 -175 98 -251 105 -119 290 -170 435 -119 42 15 495 269 518 291 4 4 6 55 5 114 l-3 105 -25 -17z m-22 -127 l-3 -57 -220 -128 c-146 -85 -241 -134 -282 -145 -167 -45 -347 34 -424 188 -30 60 -48 141 -33 151 5 3 92 -43 194 -102 102 -59 199 -112 216 -118 43 -15 69 -4 299 129 239 138 238 137 248 138 4 0 7 -25 5 -56z" />{" "}
      </g>{" "}
    </svg>
  );
}

const Skill = (props) => {
  return (
    // bg-white dark:bg-gray-950
    <div className="p-4 rounded-lg shadow-md bg-indigo-600">
      <div className="flex items-center justify-center h-16">{props.icon}</div>
      <h3 className="text-center text-sm font-medium mt-2">{props.text}</h3>
    </div>
  );
};

function PythonIcon(props) {
  return (
    <svg
      viewBox="0 0 128 128"
      width="50"
      height="50"
      preserveAspectRatio="xMidYMin"
    >
      <path
        fill="#ffffff"
        d="M49.33 62h29.159C86.606 62 93 55.132 93 46.981V19.183c0-7.912-6.632-13.856-14.555-15.176-5.014-.835-10.195-1.215-15.187-1.191-4.99.023-9.612.448-13.805 1.191C37.098 6.188 35 10.758 35 19.183V30h29v4H23.776c-8.484 0-15.914 5.108-18.237 14.811-2.681 11.12-2.8 17.919 0 29.53C7.614 86.983 12.569 93 21.054 93H31V79.952C31 70.315 39.428 62 49.33 62zm-1.838-39.11c-3.026 0-5.478-2.479-5.478-5.545 0-3.079 2.451-5.581 5.478-5.581 3.015 0 5.479 2.502 5.479 5.581-.001 3.066-2.465 5.545-5.479 5.545zm74.789 25.921C120.183 40.363 116.178 34 107.682 34H97v12.981C97 57.031 88.206 65 78.489 65H49.33C41.342 65 35 72.326 35 80.326v27.8c0 7.91 6.745 12.564 14.462 14.834 9.242 2.717 17.994 3.208 29.051 0C85.862 120.831 93 116.549 93 108.126V97H64v-4h43.682c8.484 0 11.647-5.776 14.599-14.66 3.047-9.145 2.916-17.799 0-29.529zm-41.955 55.606c3.027 0 5.479 2.479 5.479 5.547 0 3.076-2.451 5.579-5.479 5.579-3.015 0-5.478-2.502-5.478-5.579 0-3.068 2.463-5.547 5.478-5.547z"
      ></path>
    </svg>
  );
}

function JavascriptIcon(props) {
  return (
    <svg
      viewBox="0 0 128 128"
      width="50"
      height="50"
      preserveAspectRatio="xMidYMin"
    >
      <path fill="#ffffff" d="M1.408 1.408h125.184v125.185H1.408z"></path>
      <path
        fill="#000"
        d="M116.347 96.736c-.917-5.711-4.641-10.508-15.672-14.981-3.832-1.761-8.104-3.022-9.377-5.926-.452-1.69-.512-2.642-.226-3.665.821-3.32 4.784-4.355 7.925-3.403 2.023.678 3.938 2.237 5.093 4.724 5.402-3.498 5.391-3.475 9.163-5.879-1.381-2.141-2.118-3.129-3.022-4.045-3.249-3.629-7.676-5.498-14.756-5.355l-3.688.477c-3.534.893-6.902 2.748-8.877 5.235-5.926 6.724-4.236 18.492 2.975 23.335 7.104 5.332 17.54 6.545 18.873 11.531 1.297 6.104-4.486 8.08-10.234 7.378-4.236-.881-6.592-3.034-9.139-6.949-4.688 2.713-4.688 2.713-9.508 5.485 1.143 2.499 2.344 3.63 4.26 5.795 9.068 9.198 31.76 8.746 35.83-5.176.165-.478 1.261-3.666.38-8.581zM69.462 58.943H57.753l-.048 30.272c0 6.438.333 12.34-.714 14.149-1.713 3.558-6.152 3.117-8.175 2.427-2.059-1.012-3.106-2.451-4.319-4.485-.333-.584-.583-1.036-.667-1.071l-9.52 5.83c1.583 3.249 3.915 6.069 6.902 7.901 4.462 2.678 10.459 3.499 16.731 2.059 4.082-1.189 7.604-3.652 9.448-7.401 2.666-4.915 2.094-10.864 2.07-17.444.06-10.735.001-21.468.001-32.237z"
      ></path>
    </svg>
  );
}

function CIcon(props) {
  return (
    <svg
      viewBox="0 0 128 128"
      width="50"
      height="50"
      preserveAspectRatio="xMidYMin"
    >
      <path
        fill="#ffffff"
        d="M117.5 33.5l.3-.2c-.6-1.1-1.5-2.1-2.4-2.6L67.1 2.9c-.8-.5-1.9-.7-3.1-.7-1.2 0-2.3.3-3.1.7l-48 27.9c-1.7 1-2.9 3.5-2.9 5.4v55.7c0 1.1.2 2.3.9 3.4l-.2.1c.5.8 1.2 1.5 1.9 1.9l48.2 27.9c.8.5 1.9.7 3.1.7 1.2 0 2.3-.3 3.1-.7l48-27.9c1.7-1 2.9-3.5 2.9-5.4V36.1c.1-.8 0-1.7-.4-2.6zM82 66v-4h5v-5h5v5h5v4h-5v5h-5v-5h-5zm3.3-14C81.1 44.5 73.1 39.5 64 39.5c-13.5 0-24.5 11-24.5 24.5s11 24.5 24.5 24.5c9.1 0 17.1-5 21.3-12.4l12.9 7.6c-6.8 11.8-19.6 19.8-34.2 19.8-21.8 0-39.5-17.7-39.5-39.5S42.2 24.5 64 24.5c14.7 0 27.5 8.1 34.3 20l-13 7.5zM115 66h-5v5h-4v-5h-6v-4h6v-5h4v5h5v4z"
      ></path>
    </svg>
  );
}

function PostgreIcon(props) {
  return (
    <svg
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      width="55"
      height="55"
      viewBox="0 0 221.000000 228.000000"
      preserveAspectRatio="xMidYMid meet"
    >
      {" "}
      <g
        transform="translate(0.000000,228.000000) scale(0.100000,-0.100000)"
        fill="#FFFFFF"
        stroke="#FFFFFF"
      >
        {" "}
        <path d="M1495 2268 c-49 -4 -104 -11 -121 -16 -17 -6 -90 -7 -162 -4 -143 5 -216 -5 -292 -41 l-45 -22 -110 29 c-140 36 -324 42 -420 12 -169 -51 -280 -168 -320 -338 -19 -83 -19 -269 1 -382 55 -315 180 -676 278 -802 90 -117 207 -152 299 -90 l31 21 24 -22 c39 -36 117 -57 212 -56 47 0 98 5 114 12 16 6 30 10 31 9 2 -2 8 -66 13 -144 14 -180 46 -287 103 -349 62 -67 95 -78 208 -73 168 9 271 69 330 191 42 85 59 158 72 311 l12 131 68 1 c133 3 255 50 333 128 69 68 71 150 5 194 -36 25 -47 25 -193 6 l-48 -7 28 44 c43 69 117 233 162 360 61 173 86 302 86 439 1 150 -17 193 -120 289 -150 140 -322 190 -579 169z m250 -63 c147 -31 331 -154 370 -248 61 -147 -12 -491 -172 -811 -29 -59 -69 -132 -88 -162 -19 -29 -31 -55 -27 -58 24 -14 96 -17 172 -6 99 14 136 9 145 -20 15 -47 -61 -120 -169 -163 -40 -16 -75 -21 -163 -21 l-113 -1 0 -36 c0 -69 -41 -344 -61 -412 -38 -129 -145 -200 -305 -201 -73 -1 -85 2 -130 29 -99 62 -133 183 -134 472 l0 122 -50 -31 c-115 -71 -350 -36 -350 52 0 38 37 66 108 81 73 15 102 30 130 68 l23 31 -31 0 c-17 0 -46 6 -65 14 l-35 15 -107 -120 c-58 -66 -119 -127 -134 -135 -130 -67 -253 77 -367 426 -141 435 -163 712 -70 893 49 96 156 173 276 198 106 22 309 1 441 -46 41 -14 46 -14 75 4 81 48 203 68 323 51 67 -9 92 -8 140 4 32 8 72 17 88 19 71 10 215 6 280 -8z" />{" "}
        <path d="M1448 2142 c-14 -6 -4 -14 40 -37 71 -37 214 -178 261 -257 18 -32 44 -86 58 -120 23 -57 25 -69 17 -143 -5 -44 -9 -174 -9 -290 0 -197 -1 -212 -22 -251 -37 -70 -12 -58 30 13 169 289 281 694 237 855 -7 24 -31 55 -74 96 -112 105 -220 142 -406 141 -63 0 -123 -3 -132 -7z m288 -37 c140 -33 271 -129 294 -216 28 -104 -26 -365 -122 -587 -18 -40 -37 -71 -42 -69 -21 7 -30 171 -16 293 11 95 11 125 0 167 -29 115 -130 271 -235 361 -30 27 -55 52 -55 57 0 14 108 10 176 -6z" />{" "}
        <path d="M470 2123 c-64 -6 -155 -34 -195 -61 -125 -86 -172 -285 -126 -532 88 -465 239 -813 352 -813 34 0 28 -6 175 159 l71 79 -38 43 c-45 51 -73 127 -72 197 5 384 12 503 32 580 26 98 78 209 120 257 17 20 31 38 31 41 0 7 -199 45 -260 49 -30 2 -71 2 -90 1z m233 -53 c53 -14 54 -22 12 -90 -71 -114 -104 -281 -104 -521 0 -86 -3 -187 -6 -226 -7 -78 15 -163 62 -234 22 -34 24 -43 14 -62 -21 -39 -165 -187 -182 -187 -49 0 -143 154 -202 330 -77 231 -137 510 -137 629 2 186 72 309 205 361 41 16 71 18 170 16 66 -2 141 -9 168 -16z" />{" "}
        <path d="M1013 2110 c-163 -53 -260 -199 -298 -448 l-7 -44 33 18 c19 9 57 23 84 30 100 27 169 12 218 -45 32 -38 44 -77 59 -198 16 -124 3 -207 -56 -355 -25 -64 -46 -120 -46 -125 0 -4 14 -8 30 -9 36 -1 77 -36 95 -79 9 -21 13 -94 14 -245 1 -308 14 -381 82 -446 28 -27 35 -29 113 -29 72 0 90 4 141 30 98 50 117 113 160 520 18 176 31 219 72 237 16 7 30 13 32 15 2 1 -8 16 -22 32 -36 43 -170 302 -200 386 -48 138 -44 220 17 281 37 37 89 54 164 54 28 0 52 3 52 6 0 3 -19 43 -42 87 -50 97 -163 217 -248 264 -136 77 -324 103 -447 63z m272 -30 c43 -11 102 -32 133 -47 70 -36 180 -137 231 -215 47 -70 52 -98 18 -98 -49 0 -123 -30 -154 -62 -47 -51 -57 -77 -57 -153 1 -98 36 -197 140 -390 52 -97 82 -164 77 -171 -43 -59 -45 -66 -78 -332 -38 -299 -40 -313 -67 -358 -33 -56 -115 -94 -202 -94 -43 0 -53 4 -86 38 -21 20 -43 55 -50 77 -8 26 -14 133 -17 300 -6 295 -11 320 -84 370 -21 15 -39 32 -39 37 0 5 14 44 31 86 60 152 70 241 45 407 -14 99 -33 143 -75 185 -51 49 -118 58 -253 34 -37 -6 -38 -6 -38 22 0 72 55 195 115 262 58 64 96 88 171 106 83 20 149 19 239 -4z" />{" "}
        <path d="M1597 1604 c-49 -26 -59 -87 -32 -185 16 -57 155 -348 167 -349 4 0 12 25 18 55 9 43 9 86 -1 184 -10 99 -10 143 -1 199 20 117 22 112 -55 112 -41 -1 -79 -7 -96 -16z m98 -17 c17 -13 17 -15 -3 -35 -26 -26 -64 -28 -87 -6 -25 25 -2 45 61 53 5 0 18 -5 29 -12z m19 -242 c6 -158 5 -169 -10 -150 -25 31 -95 183 -110 240 -21 76 -20 77 30 70 25 -4 52 -3 63 3 10 6 18 10 19 9 1 -1 4 -78 8 -172z" />{" "}
        <path d="M828 1600 c-15 -4 -46 -18 -71 -30 l-44 -22 -6 -195 c-6 -230 0 -261 72 -333 59 -58 161 -93 161 -54 0 8 18 59 39 112 22 53 44 115 50 137 15 57 14 180 -4 272 -19 100 -42 123 -118 122 -29 0 -64 -4 -79 -9z m137 -32 c14 -6 25 -16 25 -21 0 -19 -33 -47 -55 -47 -24 0 -65 34 -65 55 0 25 52 33 95 13z m-120 -28 c3 -10 20 -31 37 -45 27 -23 38 -26 74 -20 l42 6 6 -68 c11 -118 1 -186 -44 -299 -23 -56 -48 -108 -55 -114 -30 -25 -92 15 -143 93 l-27 42 3 180 c2 99 5 188 8 198 6 19 49 46 76 47 9 0 19 -9 23 -20z" />{" "}
        <path d="M1743 868 c-21 -10 -33 -35 -33 -69 0 -43 182 -29 288 22 66 32 83 54 30 38 -55 -16 -182 -14 -219 5 -37 18 -37 18 -66 4z m63 -43 c18 -14 17 -14 -13 -15 -23 0 -33 5 -33 15 0 19 21 19 46 0z" />{" "}
        <path d="M960 820 c-51 -61 -65 -69 -155 -91 l-70 -17 30 -12 c46 -20 163 -17 205 4 87 45 123 112 82 149 -29 27 -47 20 -92 -33z m70 -14 c0 -22 -84 -86 -96 -73 -3 2 14 25 37 50 40 44 59 51 59 23z" />{" "}
      </g>{" "}
    </svg>
  );
}

// function RedoDotIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <circle cx="12" cy="17" r="1" />
//       <path d="M21 7v6h-6" />
//       <path d="M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7" />
//     </svg>
//   );
// }

function JavaIcon(props) {
  return (
    <svg
      viewBox="0 0 128 128"
      width="53"
      height="53"
      preserveAspectRatio="xMidYMin"
    >
      <path
        fill="#ffffff"
        d="M47.617 98.12c-19.192 5.362 11.677 16.439 36.115 5.969-4.003-1.556-6.874-3.351-6.874-3.351-10.897 2.06-15.952 2.222-25.844 1.092-8.164-.935-3.397-3.71-3.397-3.71zm33.189-10.46c-14.444 2.779-22.787 2.69-33.354 1.6-8.171-.845-2.822-4.805-2.822-4.805-21.137 7.016 11.767 14.977 41.309 6.336-3.14-1.106-5.133-3.131-5.133-3.131zm11.319-60.575c.001 0-42.731 10.669-22.323 34.187 6.024 6.935-1.58 13.17-1.58 13.17s15.289-7.891 8.269-17.777c-6.559-9.215-11.587-13.793 15.634-29.58zm9.998 81.144s3.529 2.91-3.888 5.159c-14.102 4.272-58.706 5.56-71.095.171-4.45-1.938 3.899-4.625 6.526-5.192 2.739-.593 4.303-.485 4.303-.485-4.952-3.487-32.013 6.85-13.742 9.815 49.821 8.076 90.817-3.637 77.896-9.468zM85 77.896c2.395-1.634 5.703-3.053 5.703-3.053s-9.424 1.685-18.813 2.474c-11.494.964-23.823 1.154-30.012.326-14.652-1.959 8.033-7.348 8.033-7.348s-8.812-.596-19.644 4.644C17.455 81.134 61.958 83.958 85 77.896zm5.609 15.145c-.108.29-.468.616-.468.616 31.273-8.221 19.775-28.979 4.822-23.725-1.312.464-2 1.543-2 1.543s.829-.334 2.678-.72c7.559-1.575 18.389 10.119-5.032 22.286zM64.181 70.069c-4.614-10.429-20.26-19.553.007-35.559C89.459 14.563 76.492 1.587 76.492 1.587c5.23 20.608-18.451 26.833-26.999 39.667-5.821 8.745 2.857 18.142 14.688 28.815zm27.274 51.748c-19.187 3.612-42.854 3.191-56.887.874 0 0 2.874 2.38 17.646 3.331 22.476 1.437 57-.8 57.816-11.436.001 0-1.57 4.032-18.575 7.231z"
      ></path>
    </svg>
  );
}

function NextIcon(props) {
  return (
    <svg
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      width="45.000000pt"
      height="45.000000pt"
      viewBox="0 0 300.000000 300.000000"
      preserveAspectRatio="xMidYMid meet"
    >
      {" "}
      <g
        transform="translate(0.000000,300.000000) scale(0.100000,-0.100000)"
        fill="#ffffff"
        stroke="none"
      >
        {" "}
        <path d="M1198 2970 c-592 -125 -1048 -582 -1168 -1171 -20 -99 -27 -227 -11 -199 5 8 21 71 36 140 71 338 191 568 414 790 224 224 467 349 795 411 64 12 124 28 134 35 26 20 -93 17 -200 -6z" />{" "}
        <path d="M1511 2986 c2 -2 79 -18 171 -35 93 -18 198 -41 235 -52 397 -122 721 -397 898 -763 57 -118 90 -220 125 -383 35 -160 49 -193 50 -112 0 124 -59 344 -135 504 -205 429 -609 741 -1074 829 -72 14 -282 23 -270 12z" />{" "}
        <path d="M1882 2126 c-13 -7 -32 -26 -43 -42 -18 -27 -19 -50 -19 -417 0 -260 4 -396 11 -410 26 -54 173 -265 191 -276 18 -11 24 -10 42 8 21 21 21 27 24 537 3 567 3 567 -59 599 -34 18 -116 19 -147 1z m148 -46 c20 -20 20 -33 20 -557 0 -295 -2 -534 -3 -532 -2 2 -45 68 -95 146 l-92 141 0 391 c0 378 1 392 20 411 15 15 33 20 75 20 42 0 60 -5 75 -20z" />{" "}
        <path d="M964 2086 c-67 -30 -64 3 -64 -659 l0 -599 34 -34 c31 -31 39 -34 93 -34 65 0 95 15 118 60 13 24 15 89 15 390 0 198 4 360 8 360 15 0 31 -23 277 -390 132 -195 342 -494 467 -663 125 -170 228 -315 228 -322 0 -26 -227 -104 -408 -140 -46 -9 -98 -23 -115 -30 -32 -14 -32 -14 26 -15 70 0 234 32 335 66 78 26 232 93 232 102 0 2 -104 144 -232 316 -194 260 -415 577 -797 1145 l-56 84 -3 -443 c-3 -511 3 -480 -92 -480 -97 0 -90 -51 -90 633 l0 596 22 15 c22 16 94 21 133 10 11 -3 40 -35 64 -72 25 -37 292 -440 594 -897 301 -456 552 -834 557 -839 11 -11 131 78 225 166 249 232 434 608 451 913 7 122 -8 95 -47 -83 -50 -234 -109 -380 -226 -556 -70 -106 -258 -304 -341 -360 -42 -29 -43 -29 -61 -10 -10 10 -118 172 -241 359 -555 842 -909 1372 -934 1394 -32 30 -123 39 -172 17z" />{" "}
        <path d="M14 1325 c13 -226 122 -505 284 -724 240 -326 661 -566 1027 -587 85 -5 88 -4 58 10 -17 8 -80 24 -140 36 -317 65 -554 190 -774 409 -223 224 -339 444 -414 791 -35 162 -48 182 -41 65z" />{" "}
      </g>{" "}
    </svg>
  );
}

function TensorFlowIcon(props) {
  return (
    <svg
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      width="50.000000pt"
      height="50.000000pt"
      viewBox="0 0 300.000000 300.000000"
      preserveAspectRatio="xMidYMid meet"
    >
      {" "}
      <g
        transform="translate(0.000000,300.000000) scale(0.100000,-0.100000)"
        fill="#ffffff"
        stroke="none"
      >
        {" "}
        <path d="M1435 2611 c-6 -5 -218 -128 -472 -274 l-463 -264 -2 -251 -3 -251 25 16 c14 9 126 75 250 146 124 71 242 140 262 153 21 13 39 24 40 24 2 0 2 -296 1 -657 l-3 -658 181 -104 c99 -57 182 -108 185 -113 3 -4 8 -8 12 -8 4 0 7 506 7 1125 0 619 -2 1125 -5 1125 -4 0 -10 -4 -15 -9z m-15 -1111 c0 -660 -4 -1060 -9 -1060 -6 0 -60 29 -122 65 -61 36 -115 65 -119 65 -4 0 -22 13 -39 29 l-30 28 -1 633 c0 474 -3 637 -12 648 -19 23 -65 9 -163 -50 -49 -30 -119 -71 -155 -90 -36 -20 -101 -57 -145 -82 -44 -25 -83 -46 -87 -46 -5 0 -8 92 -8 203 0 182 2 206 18 219 19 17 856 495 870 498 1 0 2 -477 2 -1060z" />{" "}
        <path d="M1540 1495 c0 -1069 1 -1125 18 -1116 9 6 95 57 190 113 l174 103 -1 318 c-1 176 2 317 6 315 14 -5 206 -119 246 -145 22 -13 40 -23 41 -21 1 2 0 100 -2 218 l-4 215 -141 81 -142 80 -3 127 c-2 120 1 139 24 118 15 -15 546 -321 557 -321 5 0 6 7 3 16 -3 9 -6 120 -6 247 l-1 232 -396 225 c-219 124 -433 246 -477 273 -43 26 -81 47 -83 47 -1 0 -3 -506 -3 -1125z m200 978 c19 -11 82 -47 140 -80 58 -33 214 -122 348 -198 l242 -139 0 -214 0 -213 -52 29 c-29 17 -69 39 -88 51 -43 25 -102 59 -250 144 -172 100 -180 96 -180 -79 l0 -122 29 -25 c16 -13 79 -52 140 -86 l111 -63 0 -179 c0 -98 -2 -179 -5 -179 -3 0 -52 27 -107 60 -56 33 -112 60 -124 60 -46 0 -48 -14 -51 -328 -3 -218 -7 -300 -16 -308 -25 -24 -288 -166 -295 -159 -9 8 -16 2056 -8 2091 l7 25 62 -34 c34 -19 78 -43 97 -54z" />{" "}
      </g>{" "}
    </svg>
  );
}

function ReactIcon(props) {
  return (
    <svg
      viewBox="0 0 128 128"
      width="50"
      height="50"
      preserveAspectRatio="xMidYMin"
    >
      <g fill="#ffffff">
        <circle cx="64" cy="64" r="11.4"></circle>
        <path d="M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3.6-2.4 1.1-4.8 1.5-7.1 2.1-13.2-.2-22.5-6.6-26.1-1.9-1.1-4-1.6-6.4-1.6-7 0-15.9 5.2-24.9 13.9-9-8.7-17.9-13.9-24.9-13.9-2.4 0-4.5.5-6.4 1.6-6.4 3.7-8.7 13-6.6 26.1.4 2.3.9 4.7 1.5 7.1-2.4.7-4.7 1.4-6.9 2.3C8.2 50 1.4 56.6 1.4 64s6.9 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3-.6 2.4-1.1 4.8-1.5 7.1-2.1 13.2.2 22.5 6.6 26.1 1.9 1.1 4 1.6 6.4 1.6 7.1 0 16-5.2 24.9-13.9 9 8.7 17.9 13.9 24.9 13.9 2.4 0 4.5-.5 6.4-1.6 6.4-3.7 8.7-13 6.6-26.1-.4-2.3-.9-4.7-1.5-7.1 2.4-.7 4.7-1.4 6.9-2.3 12.5-4.8 19.3-11.4 19.3-18.8s-6.8-14-19.3-18.8zM92.5 14.7c4.1 2.4 5.5 9.8 3.8 20.3-.3 2.1-.8 4.3-1.4 6.6-5.2-1.2-10.7-2-16.5-2.5-3.4-4.8-6.9-9.1-10.4-13 7.4-7.3 14.9-12.3 21-12.3 1.3 0 2.5.3 3.5.9zM81.3 74c-1.8 3.2-3.9 6.4-6.1 9.6-3.7.3-7.4.4-11.2.4-3.9 0-7.6-.1-11.2-.4-2.2-3.2-4.2-6.4-6-9.6-1.9-3.3-3.7-6.7-5.3-10 1.6-3.3 3.4-6.7 5.3-10 1.8-3.2 3.9-6.4 6.1-9.6 3.7-.3 7.4-.4 11.2-.4 3.9 0 7.6.1 11.2.4 2.2 3.2 4.2 6.4 6 9.6 1.9 3.3 3.7 6.7 5.3 10-1.7 3.3-3.4 6.6-5.3 10zm8.3-3.3c1.5 3.5 2.7 6.9 3.8 10.3-3.4.8-7 1.4-10.8 1.9 1.2-1.9 2.5-3.9 3.6-6 1.2-2.1 2.3-4.2 3.4-6.2zM64 97.8c-2.4-2.6-4.7-5.4-6.9-8.3 2.3.1 4.6.2 6.9.2 2.3 0 4.6-.1 6.9-.2-2.2 2.9-4.5 5.7-6.9 8.3zm-18.6-15c-3.8-.5-7.4-1.1-10.8-1.9 1.1-3.3 2.3-6.8 3.8-10.3 1.1 2 2.2 4.1 3.4 6.1 1.2 2.2 2.4 4.1 3.6 6.1zm-7-25.5c-1.5-3.5-2.7-6.9-3.8-10.3 3.4-.8 7-1.4 10.8-1.9-1.2 1.9-2.5 3.9-3.6 6-1.2 2.1-2.3 4.2-3.4 6.2zM64 30.2c2.4 2.6 4.7 5.4 6.9 8.3-2.3-.1-4.6-.2-6.9-.2-2.3 0-4.6.1-6.9.2 2.2-2.9 4.5-5.7 6.9-8.3zm22.2 21l-3.6-6c3.8.5 7.4 1.1 10.8 1.9-1.1 3.3-2.3 6.8-3.8 10.3-1.1-2.1-2.2-4.2-3.4-6.2zM31.7 35c-1.7-10.5-.3-17.9 3.8-20.3 1-.6 2.2-.9 3.5-.9 6 0 13.5 4.9 21 12.3-3.5 3.8-7 8.2-10.4 13-5.8.5-11.3 1.4-16.5 2.5-.6-2.3-1-4.5-1.4-6.6zM7 64c0-4.7 5.7-9.7 15.7-13.4 2-.8 4.2-1.5 6.4-2.1 1.6 5 3.6 10.3 6 15.6-2.4 5.3-4.5 10.5-6 15.5C15.3 75.6 7 69.6 7 64zm28.5 49.3c-4.1-2.4-5.5-9.8-3.8-20.3.3-2.1.8-4.3 1.4-6.6 5.2 1.2 10.7 2 16.5 2.5 3.4 4.8 6.9 9.1 10.4 13-7.4 7.3-14.9 12.3-21 12.3-1.3 0-2.5-.3-3.5-.9zM96.3 93c1.7 10.5.3 17.9-3.8 20.3-1 .6-2.2.9-3.5.9-6 0-13.5-4.9-21-12.3 3.5-3.8 7-8.2 10.4-13 5.8-.5 11.3-1.4 16.5-2.5.6 2.3 1 4.5 1.4 6.6zm9-15.6c-2 .8-4.2 1.5-6.4 2.1-1.6-5-3.6-10.3-6-15.6 2.4-5.3 4.5-10.5 6-15.5 13.8 4 22.1 10 22.1 15.6 0 4.7-5.8 9.7-15.7 13.4z"></path>
      </g>
    </svg>
  );
}

function FlaskIcon(props) {
  return (
    <svg
      viewBox="0 0 128 128"
      width="50"
      height="50"
      preserveAspectRatio="xMidYMin"
    >
      <path
        fill="#ffffff"
        d="M44.44 100.63c-4.23-3.33-8.74-6.52-11.83-11.01-6.49-7.92-11.49-17.1-14.9-26.74-2.07-6.27-2.77-12.99-5.44-19.02-2.78-4.38.48-9.16 5.27-10.55 2.13-.41 5.89-2.43 1.36-.98-4.06 2.98-4.45-2.71-.29-3.07 2.84-.38 3.89-2.7 2.92-4.8-3.05-1.99 7.4-4.18 2.14-7.15-5.48-5.91 7.66-7.05 4.42-.33-.77 5.16 9.18-.95 6.87 5.01 2.35 2.86 8.8.65 8.63 4.67 3.42.24 4.6 3.11 7.8 3.33 3.33 1.5 9.36 2.69 10.49 6.44-3.3 2.61-10.95-5.4-11.31 1.84 1 10.69.74 21.7 4.65 31.88 1.85 6.16 6.33 11.01 10.38 15.81 3.88 4.7 9.12 8.01 14.48 10.8 4.69 2.21 9.75 3.68 14.87 4.6 2.07-1.59 5.74-7.48 8.97-5 .16 2.8-6.42 5.84-.31 5.54 3.59-1.08 6.08 2.77 9.04-.71 2.72 3.23 11.32-2.06 9.38 4.53-2.62 1.69-6.44.67-9.07 3-4.33-2.16-7.77 1.93-12.56 1.42-5.32.95-10.73 1.34-16.13 1.34-8.85-.7-17.89-.99-26.3-4.07-4.74-1.38-9.37-4.08-13.53-6.78zm7.47 3.24c4.63 2 9.16 4.11 14.23 4.75 8.05 1.12 16.37 2.84 24.45 1.27-3.66-1.65-7.44.64-11.08-1.18-4.37.94-9.06-.24-13.5-.82-5.05-2.25-10.5-3.8-15.23-6.72-5.91-2.16 3.06 2.77 4.65 3.17 3.69 2.1-4.06-1.08-5.16-1.95-3.09-1.74-3.49-1.37-.31.39.64.37 1.28.77 1.95 1.09zm-8.81-6.23c4.49 1.66-.02-3.16-2.07-2.88-.91-1.58-3.48-2.58-1.67-3.43-3.26 1.13-3.42-4.3-4.95-3.53-3.45-1.09-1.34-4.95-5.45-7.32-.37-2.5-4.08-4.66-5.26-8.43-.52-1.93-4.19-7.46-1.94-2.31 1.92 4.96 5.29 9.21 8.1 13.45 2.18 4.04 4.76 8.26 8.72 10.78 1.34 1.3 2.63 3.27 4.52 3.67zM30.17 83.45c.16-.68.82 1.46 0 0zm18.3 16.18c1-.44-1.43-.56 0 0zm2.44.89c-.25-1.23-1.11.69 0 0zm3.05 1.27c1.45-1.38-2.24-.87 0 0zm5.22 2.91c.89-1.3-2.82-.49 0 0zm-10.03-6.99c2.25-1.46-2.91-.02 0 0zm2.29 1.14c-.07-.77-.82.34 0 0zm11.43 7.13c1.84 1.16 10.73 2.54 5.16.48-.93.2-10.33-2.66-5.16-.48zM44.72 91.85c-.18-.77-2.85-.85 0 0zm5.32 3.1c1.39-.96-2.87-.74 0 0zm4.48 2.75c1.98-.75-3.23-.75 0 0zm-11.97-8.21c2.16 1.65 8.7.21 3.3-.99-2.45-1.31-7.99-2.2-4.22.79l.92.2zm15 9.16c.9-1.53-3.77-.88 0 0zm-4.56-3.63c5.27 1.49-4.43-3.34-1.3-.55l.7.32.6.23zm9.14 5.28c4.99.05-4.51-.68 0 0zm-21.5-13.7c-.19-.93-1.23.08 0 0zm29.94 18.44c.14-1.68-1.62 1.25 0 0zM49.15 91.82c-.3-.88-1.56-.04 0 0zm-8.04-5.8c2.86-.17-3.93-1.26 0 0zm-9.54-6.16c-.36-1.38-3.12-2.47 0 0zM56.6 95.74c-.52-.6-.25.13 0 0zm15.58 9.56c-.05-.91-.85.35 0 0zM55.22 94.32c.28-1.18-2.44-.36 0 0zm-11.6-7.36c2.13-.23-3.42-1.44 0 0zm19.63 12.2c3.32-1.32-3.24-.64 0 0zm-10.21-6.93c3.83.49-4.56-2.61-.84-.28l.84.28zm13.31 8.19c3.58-2.14 2.4 5.01 6.07.6 3.62-2.64-3.13 3.27 1.33.47 3.23-2.16 7.99 1.02 11 2.06 2.16-.11 4.27 1.87 6.49.67 4.27-1.15-8.36-1.71-5.05-3.75-3.91 1.14-6.8-1.36-8.72-3.86-4.39-1.01-9.46-3.25-11.65-7.14-.89-1.46 1.29.21-.77-2.18-2.64-2.35-3.96-5.02-5.73-7.88-2.12-1.13-2.37-4.46-2.58-.11.02-2.74-2.56-4.59-3.19-3.82-.01-2.64 2.76-1.32.82-3.27-.42-2.74-1.79-5.59-2.2-8.68-.64-1.49-.09-4.68-2.19-1.31-.76 3.57-.25-4.38.94-1.76 1.56-2.67-.56-2.36-.65-1.99 1.02-2.26.64-5.46-.27-4.24.54-2.39.86-8.8-.81-7.66 1.01-2.5 1.92-11.44-2.47-8.03-1.78.03-4.85.64-6.31 1.37 4.56 2.51-.46.91-2.32.51-.24 2.33-2.08 1.32-4.38 1.34 3.67.45-1.79 3.75-3.89 2.47-2.74 1.31 2.36 4.57.05 5.58.28 1.52-4.19-.55-3.84 2.96-2.65-1.12-.36 4.16.96 2.38 4.51 1.22 3.18 4.01 3.29 6.65-.74 1.54-3.63-3.62-.64-3.38-2.36-3.83-2.61-1.38-4.56.39-.45.13 4.99 2.53 1.57 3.72 3.01.47 3.1 3.1 3.71 4.76 1.81 1.88 1.44-2.08 3.6.18-1.37-2.02-7.25-5.68-2.52-4.51-.03-2.03-.86-3.67.6-3.63 1.44-2.6-1.51 6.42 1.73 3.11.9-.39 1.12-2.6 2.73.21 2.34 2.3.85 3.97-2.46 1.86.59 2.01 4.42 2.72 3.7 5.86.76 2.76 1.83 1.74 2.76 1.58.73 2.68 1.14.71 1.18-.57 3.34.72 2.56 2.69 3.6 4.07 2.3 1.04-3.29-7.04.66-2.43 4.16 3.75 1.56 5.32-2.17 4.72 2.36-.19 3.12 3.19 6.07 3.07 2.69 1.28 4.52 6.2-.12 4.15-1.61-1.45-7.31-3.24-2.65-.48 4.3 1.99 7.71 3.18 11.86 5.68 2.96 2.12 4.25 4.54 5.37 5.02-2.49 1.19-7.51-.95-3.78-1.61-2.33-.42-4.94-1.6-2.71 1.3 1.89 1.58 6.71 1.42 7.58 1.59-.73 1.61-1.99 1.74.03 1.86-2.25 1.22.72 1.41.93 2.1zm-4.6-13c-1.37-1.43-1.72-4.11-.24-1.78.75.3 2.43 4.38.24 1.78zm14.99 9.52c.85-.06.02.65 0 0zM59.59 83.91c-.06-2.17.49 1.67 0 0zM58.1 81.9c-1.73-3.32 2.17.95 0 0zM40.04 69.44c1.01-.27.5 1.73 0 0zm14.37 7.79c.62-2.33.73 1.96 0 0zm-10.15-7.06c-.71-1.29 1.5 1.21 0 0zm8.71 2.79c-1.63-3.65 1.16-2 .36.6l-.36-.6zM37.95 62.95c-.73-1.2-1.93-4.72-1.55-5.79.35 1.75 3.72 7.53 1.65 2.39-2.28-4.3 2.73 1.4 3.25 2.47.24 1.07-1.41-.29-.29 2.21-2.04-2.85-1.2 1.58-3.06-1.28zm-4.64-3.2c.19-2.79 1.06 1.91 0 0zm2.08.72c1-2.11 1.69 2.93 0 0zm-5.02-3.89c-1.73-1.72-2.98-3.3.08-1.07 1.18.05-2.62-3.6.28-1.16 3.06.56 1.51 5.01-.36 2.23zm2.64-.07c1-.99.53.98 0 0zm1.62.52c-1.52-2.85 1.85 1.2 0 0zm-3.22-3.08c-5.02-4.47 6.31 2.34.82.83l-.82-.83zm14.39 8.36c-2.18-1.3-.58-9.18.16-3.79 2.11-.68-.12 2.78 1.46 2.75-.24 2.18-.95 2.97-1.62 1.04zm5.33 3.15c.21-2.38.45 1.62 0 0zm-.93-.92c.24-1.01.03 1.2 0 0zM32.39 52.48c-3.23-4.45 9.38 4.51 2.07 1.13-.77-.21-1.69-.28-2.07-1.13zm10.26 5.43c-.31-3.75.68.62 0 0zm7.78 5c.6-2.14.05 1.41 0 0zM32.89 50.78c1.92-.41 7.95 3.37 2.41 1.08-.62-.69-1.93-.38-2.41-1.08zm16.47 8.21c.2-3.84 1.15-2.29.01.55l-.01-.55zm-15.05-9.55c.78-1.15-2.08-5.18.41-1.45 1.08.85 3.11 1.43 1.31 1.79 2.84 2.5-.68.68-1.72-.34zm14.24 8.35c.54-4.37.47 2.56 0 0zM32.68 45.41c.6-.26.32.79 0 0zm3.71 2.21c.96-2.01 1.77 2.23 0 0zm10.47 5.82c0-.77.2 1.12 0 0zm-.6-1.34c-1.45-3.59 1.35 1.9 0 0zm-.89-2.35c-.25-1.48.83 1.86 0 0zm1.45-2.36c-1-1.76 1.26-7.75 1.51-4.03-1.05 2.89-.3 4.51.43.63 1.36-3.06-.29 6.02-1.94 3.4zm1.49-8.91c.44-.53.1.65 0 0zM45.82 87.6c-.59-.52.07.33 0 0zm5.13 2.6c2.86.74 2.84-.44.26-.79-1.39-1.29-5.77-2.66-1.85-.16.27.65 1.09.63 1.59.95zm-10.14-6.74c1.57 1.18 5.93 3.32 2.24.45 1.24-1.44-2.38-2.21-1.18-3.18-3.06-1.87-2.41-1.7-.27-1.64-3.67-1.64.53-1.52.33-2.36-1.42-.28-7.03-2.5-3.73.18-3.36-1.71-.8.64-1.82.39-3.44-.94 3.06 2.62-.54 1.73 1.97 1.56 5.3 4 .83 1.65-.57.85 3.21 2.14 4.14 2.78zm5.37 3.09c6.53 2.1-3.2-2.58 0 0zm27.5 16.65c.08-1.3-.9 1.11 0 0zm2.82 1.19c1.51-1.46.06 2.33 2.5-.36.03-1.92-.07-3.06-2.8-.72-.75.42-1.09 2.19.3 1.08zM31.65 76.22c-.47-1.82-3.25-1.81 0 0zm3.01 1.98c-1.12-1.86-4-1.68 0 0zm17.17 10.35c1.68 1.49 7.7 1.09 2.03.18-.83-1.24-5.32-.94-2.03-.18zm23.6 14.57c2.57-2.16-2.5.97 0 0zm5.36 3.69c.02-.69-1.11.3 0 0zm.01-.97c2.86-3.03-2.77.18 0 0zM24.22 70.01c-2.43-3.47-1.51-5.03-3.86-7.87-.45-2.17-4.03-7.09-1.85-1.88 1.99 3.05 2.58 7.77 5.71 9.75zm55.68 34.87c5.26-3.4-2.15-1.48 0 0zm4.01 1.57c2.64-2.26-1.66-.47 0 0zM30.75 72.38c.76-1.12-1.94-.14 0 0zm52.33 32.99c2.55-1.64-.59-1.39-.46.15l.46-.15zM48.5 83.58c-.09-1.11-1.35.09 0 0zm2.14 1.23c-.69-1.38-1.05.21 0 0zm36.53 21.67c3.27-2.36-1.98-.45-.68.45l.68-.45zm-1.26-.6c2.67-2.23-2.8.99 0 0zm6.39 4.25c1.79-1.19-2.17-.38 0 0zM32.39 71.57c2.39.54 9.56 5.89 5.33.37-2.17-.64-.87-5.94-3.08-5 1.48 2.48 1.22 3.53-1.9 1.97-3.91-1.91-2.2.94-1.43 1.73-1.04.25 1.39.91 1.08.93zm-10.9-8.61c.43-1.77-3.95-9.75-2.07-4 .68 1.21.61 3.49 2.07 4zM41.5 75.3c-1.23-1.03-.06-.15 0 0zm3.03.71c0-1.88-3.35-.77 0 0zm26.3 16.57c-.5-1.28-1.98-.02 0 0zm1.26.93c-.18-.72-.72.14 0 0zm10.43 6.56c1-.74-1.25-.09 0 0zM26.93 64.35c2.87-1.11-3.07-.79 0 0zm41.59 26.2c-.04-1.86-1.83.46 0 0zM25.8 61.71c1.84-.62-1.71-.41 0 0zm5.34 2.59c-.03-.61-.56.23 0 0zm65.22 39.99c2.37-.48 7.77 1.21 8.64-.63-2.88-.07-9.95-2.03-10.28.46l.63.1 1.01.07zM32.84 64.73c.05-1.88-1.46-.07 0 0zm-14.05-9.75c-.64-3.58-2.43-.54 0 0zm3.35.84c.04-1.15-3.07-1.03 0 0zm1.91.94c-.55-.44-.43.57 0 0zm12.06 7.73c.57-.52-1.35-.38 0 0zm-13.33-9.85c-.33-2.71-3.88-.4 0 0zm-6.87-4.46c-.1-1.25-.67.47 0 0zm1.02-.77c-.17-1.48-.88.19 0 0zm5.65 3.37c2.39-.94-4.35-1.94-.49-.18l.49.18zm75.59 46.69c1.53-1.4-1.94-.43 0 0zm9.13 4.74c.61-1.81-1.54.23 0 0zM23.15 49.82c.26-1.75-1.89.35 0 0zm-8.03-5.38c-.43-2.47-.37-6.82 3.76-5.35-5.51 1.1 3.82 6.85 2.64 2.31 2.32.11 4.53-1.37 3.32.88 4.57-.5 7.73-4.46 12.14-3.91 3.44-.46 7.19-.8 10.89-2.18 3.04-.22 5.97-3.5 4.31-5.44-4.15-.35-8.5.17-13.08 1.08-5.08 1.06-9.7 3.06-14.83 3.93-5 .67 1 1.85-.43 2.11-2.61.9 3.11 1.52-.34 2.47-2.13-.41-4.35-1.14-3.44-3.38-4.79.62-9 2.61-5.21 7.48h.27zm11.54-5.88c1.12-4.14 6.01 3.4 1.84.55-.5-.38-1.32-.68-1.84-.55zm.22-2.01c1.62-1.2.86.68 0 0zm2.06.04c.15-1.9 4.71 1.01.75.68l-.75-.68zm2.81-1.14c1.03-1.2.3 1.07 0 0zm.72-.48c1.71-2.06 9.69-1.31 3.85-.2-1.56-1.18-2.76.7-3.85.2zm10.42-1.6c-.26-5.62 5.18 1.99 0 0zm2.96-.02c1.08-2.83 4.2-1.14.5-.57.08.3-.11 1.46-.5.57zM21.99 48.37c3.23-1.98-3.43-1.72 0 0zm2.39.66c1.13-1.2-2.46-.49 0 0zm-7.04-4.99c1.85-1.42-2.18-.54 0 0zm95.35 59.65c.05-1.65-1.41.74 0 0zM103 97.08c.28-1.9-1.24.16 0 0zm12.36 7.25c2.58.01 7.82-.8 2.2-.8-.88.13-5.13.11-2.2.8zM26.48 47.87c2.09-.14 3.27-2.3-.41-2.18-5.69-.59 5.02 1.95-.73 1.22-.77.51 1.09 1.1 1.14.96zm1.84.93c-.22-1.34-.65.71 0 0zm2.18-5.82c.9-1.12-1.26-.3 0 0zm-6.95-11.6c3.73-1.27 8.82-2.69 10.58.62-1.79-2.15-.72-4.28.97-1.12 2.39 3.19 3.59-1.45 2.03-2.52 1.77 2.2 3.79 3.24 1.19.14 2.83-3.4-5.66.45-7.59.41-.92.41-9.58 2.2-7.18 2.47zm2.19-4.18c2.13-1.6 7.35.96 4-1.59-.33-.3-7.35 1.93-4 1.59zm7.75.32c2.49.06-1.07-3.34 1.89-1.8-.49-1.59-3.45-1.89-4.9-2.52-.82 1.45 1.66 4.34 3.01 4.32zm-6.39-7.04c.86-1.16-1.51.6 0 0zm3.16.76c4.01-.53-1.02-1.72-.81-.04l.81.04zm-5.91-4.62c-2.82-3.69 5.31.62 2.44-3.24-2.41-1.92-4.73 2.16-2.44 3.24zm36.21 19.5c1.29-2.29-5.34-3.09-.87-.81.42.14.32.97.87.81z"
      ></path>
    </svg>
  );
}

function LeafIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
    </svg>
  );
}

function WindIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2" />
      <path d="M9.6 4.6A2 2 0 1 1 11 8H2" />
      <path d="M12.6 19.4A2 2 0 1 0 14 16H2" />
    </svg>
  );
}

function GitGraphIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="5" cy="6" r="3" />
      <path d="M5 9v6" />
      <circle cx="5" cy="18" r="3" />
      <path d="M12 3v18" />
      <circle cx="19" cy="6" r="3" />
      <path d="M16 15.7A9 9 0 0 0 19 9" />
    </svg>
  );
}

function DatabaseIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 5V19A9 3 0 0 0 21 19V5" />
      <path d="M3 12A9 3 0 0 0 21 12" />
    </svg>
  );
}
