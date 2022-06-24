import TranslationForm from "../components/Translations/TranslationForm"
import TranslationSigns from "../components/Translations/TranslationSigns"
import { useUser } from "../context/UserContext"
import withAuth from "../hoc/withAuth"

const SIGNS = [
    {
        id: 1,
        name: "a",
        image: "individual_signs/a.png"
    },
    {
        id: 2,
        name: "b",
        image: "indivdual_signs/b.png"
    },
    {
        id: 3,
        name: "c",
        image: "indivdual_signs/c.png"
    },
    {
        id: 4,
        name: "d",
        image: "indivdual_signs/d.png"
    },
    {
        id: 5,
        name: "e",
        image: "indivdual_signs/e.png"
    },
    {
        id: 6,
        name: "f",
        image: "indivdual_signs/f.png"
    },
    {
        id: 7,
        name: "g",
        image: "indivdual_signs/g.png"
    },
    {
        id: 8,
        name: "h",
        image: "indivdual_signs/h.png"
    },
    {
        id: 9,
        name: "i",
        image: "indivdual_signs/i.png"
    },
    {
        id: 10,
        name: "j",
        image: "indivdual_signs/j.png"
    },
    {
        id: 11,
        name: "k",
        image: "indivdual_signs/k.png"
    },
    {
        id: 12,
        name: "l",
        image: "indivdual_signs/l.png"
    },
    {
        id: 13,
        name: "m",
        image: "indivdual_signs/m.png"
    },
    {
        id: 14,
        name: "n",
        image: "indivdual_signs/n.png"
    },
    {
        id: 15,
        name: "o",
        image: "indivdual_signs/o.png"
    },
    {
        id: 16,
        name: "p",
        image: "indivdual_signs/p.png"
    },
    {
        id: 17,
        name: "q",
        image: "indivdual_signs/q.png"
    },
    {
        id: 18,
        name: "r",
        image: "indivdual_signs/r.png"
    },
    {
        id: 19,
        name: "s",
        image: "indivdual_signs/s.png"
    }, 
    {
        id: 20,
        name: "t",
        image: "indivdual_signs/t.png"
    },
    {
        id: 21,
        name: "u",
        image: "indivdual_signs/u.png"
    },
    {
        id: 22,
        name: "v",
        image: "indivdual_signs/v.png"
    },
    {
        id: 23,
        name: "w",
        image: "indivdual_signs/w.png"
    },
    {
        id: 24,
        name: "x",
        image: "indivdual_signs/x.png"
    },
    {
        id: 25,
        name: "y",
        image: "indivdual_signs/y.png"
    },
    {
        id: 26,
        name: "z",
        image: "indivdual_signs/z.png"
    },


]


const Translation = () => {

    const handleTranslationClicked = () => {
        
    }


    return (

        <>
        <h1>This is the Translation page</h1>

        <section id="translations">
        <TranslationForm  />
        </section>


        </>
    )
}

export default Translation

