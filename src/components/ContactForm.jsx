import { useForm, ValidationError } from '@formspree/react';
import { Button, Input, Textarea } from '@nextui-org/react';

export const ContactForm = () => {
  const [state, handleSubmit] = useForm("mpwadogj");
  if (state.succeeded) {
      return <p className='text-center font-bold text-2xl pt-20'>Thanks for joining!</p>;
  }
  return(
    <>
      <div className='flex justify-center items-center py-20'>
        <form onSubmit={handleSubmit} className='flex flex-col gap-3 w-[300px] sm:w-[500px]'>
          <Input
            id="email"
            type="email" 
            name="email"
            label="Email"
            color='danger'
            variant='flat'
          />
          <ValidationError 
            prefix="Email" 
            field="email"
            errors={state.errors}
          />
          <Textarea
            id="message"
            name="message"
            placeholder="Message"
            color='danger'
            variant='flat'
          />
          <ValidationError 
            prefix="Message" 
            field="message"
            errors={state.errors}
          />
          <Button type="submit" disabled={state.submitting} className='bg-[#e16162] text-white'>
            Send Message
          </Button>
        </form>
        </div>
      </>
  );
}
