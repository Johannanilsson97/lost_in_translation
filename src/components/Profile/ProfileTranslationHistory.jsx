import ProfileTranslationHistoryItems from "./ProfileTranslationHistoryItems"

const ProfileTranslationHistory = ({ translations }) => {

    const translationList = translations.map(translations => <ProfileTranslationHistoryItems key={ translations } translations={ translations } />) 

    return (
        <section>
            <h4>Translation history</h4>
            <ul>
            { translationList }
            </ul>
        </section>
    )
}

export default ProfileTranslationHistory

