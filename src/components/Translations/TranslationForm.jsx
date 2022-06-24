import { useForm } from 'react-hook-form'

const TranslationForm = () => {

    const { register, handleSubmit } = useForm()


    const onSubmit = (TranslationSplit) => {
        console.log(TranslationSplit);
        
    }

return (
    <form onSubmit={ handleSubmit(onSubmit) }>
        <fieldset>
            <label htmlFor="translations">Translation</label>
            <input type="text" id="translations" {...register ('translations')} />
        </fieldset>

        <button type="submit">Translate</button>
     </form>
)

}

export default TranslationForm