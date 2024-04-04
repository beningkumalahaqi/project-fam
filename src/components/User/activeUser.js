import Image from "next/image";
export default function ActiveUser() {
  return (
    <>
      <div className="card w-80 bg-base-100 shadow-xl">
        <div className="card-body">
          <h1 className="text-lg text-center mb-3 font-bold">Active User</h1>
          <div className="grid grid-cols-7 gap-2">
            <div className="avatar online rounded-full bg-white">
              <div className="w-10 rounded-full">
                <Image
                  height={100}
                  width={100}
                  src="/staticProfile/profileStatic.png"
                  alt="Profile picture"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
