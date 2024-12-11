import { IChildrenProps } from "@/app/boards/template";

export default function UserProfileLayout({ children }: IChildrenProps) {
  console.log("[render]: user/profile/layout");
  return (
    <>
      <div style={{ backgroundColor: "yellow", marginBottom: "2rem" }}>
        UserProfileLayout으로 감싸집니다.
      </div>
      {children}
      <div style={{ backgroundColor: "yellow", marginTop: "2rem" }}>
        UserProfileLayout으로 감싸집니다.
      </div>
    </>
  );
}
