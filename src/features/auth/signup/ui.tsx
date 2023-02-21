import { Link } from 'atomic-router-react'
import { useForm } from 'effector-forms'
import { SyntheticEvent } from 'react'

import { signInRoutes } from '@/shared/routing'
import { AuthInput } from '@/shared/ui/inputs/auth-imput'

import { registerForm } from "./model"

export const SignUpForm = () => {
	const {fields, eachValid, errorText,submit} = useForm(registerForm)
	
	const onSubmit = (e:SyntheticEvent) => {
		e.preventDefault()
		submit()
	}
	fields.email.onChange
	return (
		<div>
			<form className='flex flex-col gap-5' onSubmit={onSubmit}>
				<AuthInput
				value={fields.email.value}
				placeholder={'Email'}
				name={'Email'}
				onChange={fields.email.onChange}
				disable={false}
				errorText={errorText('email')}
				/>
				<AuthInput
				value={fields.password.value}
				placeholder={'Password'}
				name={'Password'}
				onChange={fields.password.onChange}
				disable={false}
				errorText={errorText('password')}
				/>
				<AuthInput
				value={fields.confirmation.value}
				placeholder={'Password'}
				name={'Repeat Password'}
				onChange={fields.confirmation.onChange}
				disable={false}
				errorText={errorText('confirmation')}
				/>
				<div className='flex justify-between items-center'>
					<Link to={signInRoutes.route} className='text-sm text-brown'>Log In to your account</Link>
					<button onSubmit={onSubmit}
					className='px-[30px] py-[14px] bg-brown hover:bg-[#af6c47] transition-colors duration-200 font-bold text-sm text-white'>
						SIGN UP
					</button>
				</div>
			</form>
		</div>
	)
}