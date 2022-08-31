import nextId from "react-id-generator"
import facebook from "../../images/facebook-footer.svg"
import instagram from "../../images/instagram-footer.svg"
import linkedin from "../../images/linkedin-footer.svg"

export const footerSocials = [
    {
        id: nextId(),
        url: "https://www.facebook.com/imelda.culjak",
        image: facebook
    },
    {
        id: nextId(),
        url: "https://www.instagram.com/", 
        image: instagram
    },
    {
        id: nextId(),
        url: "https://rs.linkedin.com/in/imelda-monarov-culjak-01bb8742?trk=people-guest_people_search-card",
        image: linkedin
    },
]