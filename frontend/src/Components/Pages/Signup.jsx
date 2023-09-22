import signupImg from "../../../public/Images/signup.webp"
import Template from "../Home/core/Auth/Template"

function Signup() {
  return (
    <Template
      title="Join for the learning free"
      description1="Build skills for today, tomorrow, and beyond."
      description2="Education to future-proof your career."
      image={signupImg}
      formType="signup"
    />
  )
}

export default Signup