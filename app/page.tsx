import Image from "next/image";
import EyeInsights from "./components/EyeInsightsWrapper";

export default function Home() {
  return (
    <div className="home">
      <Image 
        src={"/dior.jpg"} 
        alt="Display of Dior brand frames"
        width={1067}
        height={800}
        loading="eager"
        style={{
          justifySelf: "center",
          marginBottom: 10
        }}
      />
      <hr/>
      <div className="whiteSpacer" style={{height: 30}}/>
      <p className="storeHours" 
        style={{
          color: "#000000", 
          fontSize: "x-large", 
          textAlign: "center",
          display: "grid",
          gridTemplateColumns: "auto auto"
        }}
      >
        <span>
          <strong>
            Office Hours<br/>
            Monday - Friday 10am - 6pm<br/>
            Saturdays 9:30am - 5pm<br/>
          </strong>
        </span>
        <span>
          <strong>
            Eye Examinations<br/>
            Monday - Saturday<br/>
            By appointment / walk-ins when available<br/>
          </strong>
        </span>
      </p>
      <div className="whiteSpacer" style={{height: 30}}/>
      <hr/>
      <EyeInsights/>
      <div className="whiteSpacer" style={{height: 30}}/>
      <div className="accessSummary">
        <p>
          Welcome to Access Optical, where state of the art Optometry is the hallmark. If you're looking for quality care with a personal touch, we hope you will give us a call.
        </p>
        <p>
          Access Optical is family owned and operated to insure the utmost in personal care. Our family looks forward to the opportunity of serving your family's optometric needs. At Access Optical we pride ourselves on the individual care and attention we provide to all our patients. We are participating providers for most eyecare and medical insurance plans.
        </p>
        <p>
          Access Optical is located at 2169 Merrick Road, Merrick, NY 11566, our practice has been recognized as a leader in eye care for the community for many years. Your entire family is welcomed from the children to the seasoned adult, we will make sure you are treated like family.
        </p>
        <p>
          Our professional staff consists of three New York State Licensed Opticians and two Optometrists that possess the highest New York State credentials.
        </p>
        <p>
          Access Optical offers 1 hour emergency service from our on site laboratory. You will find at every encounter honesty, sincerity. and integrity. Appointments accepted.....walk-ins welcomed!!
        </p>
        <p>
          Our slogan is our standard..."The Perfect Blend of Professionalism and Price"
        </p>
      </div>
      <Image
        alt="Promotional art of a positive and welcoming eyecare business"
        src={"/eye-care-clip-art.jpg"}
        width={1100}
        height={799}
        style={{
          paddingBottom: 15
        }}
      />
    </div>
  );
}
