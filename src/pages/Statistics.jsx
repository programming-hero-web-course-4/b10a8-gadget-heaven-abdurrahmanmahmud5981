import { Helmet } from "react-helmet"
import SubHeading from "../components/SubHeading/SubHeading"


const Statistics = () => {
  return (
    <div>
       <Helmet>
                <meta charSet="utf-8" />
                <title>Statistics | Gadget Heaven</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
      <div className="bg-primary text-white py-10">
        <SubHeading
          title="Statistics"
          subTitle="Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"
        />
        
      </div>
    </div>
  )
}

export default Statistics