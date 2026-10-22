import Logo from "./components/Logo";
import Dropdown from "./components/Dropdown";

export default function Home() {
  return (
    <div>
      <Logo/>
      <Dropdown
        label={"Our Practice"}
        items={[
          {id: 0, path:"/", text:"Our Services"},
          {id: 1, path:"/", text:"Patient Forms"},
          {id: 2, path:"/", text:"Locations"},
          {id: 3, path:"/", text:"Coupons"}
        ]}
      />
    </div>
  );
}
