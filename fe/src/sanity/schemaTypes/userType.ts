import {UserIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export const userType = defineType({
  name: 'user',
  title: 'User',
  type: 'document',
  icon: UserIcon,
  fields: [
    {
      name: 'username',
      title: 'Username',
      type: 'string',
      validation: (Rule) => Rule.required().email().min(3)
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
      validation: (Rule) => Rule.required().email().min(6)
    },
    {
      name: 'password',
      title: 'Password',
      type: 'string',
      hidden: true,
      validation: (Rule) => Rule.required().min(6)
    },
    {
      name: 'resetPasswordToken',
      title: 'Reset Password Token',
      type: 'string'
    },
    {
      name: 'confirmationToken',
      title: 'Confirmation Token',
      type: 'string'
    },
    {
      name: 'confirmed',
      title: 'Confirmed',
      type: 'boolean',
      initialValue: false
    },
    {
      name: 'blocked',
      title: 'Blocked',
      type: 'boolean',
      initialValue: false
    },
    {
      name: 'role',
      title: 'Role Name',
      type: 'string',
      options: {
        list: [
          {title: 'Authenticated', value: 'authenticated'},
          {title: 'Public', value: 'public'}
        ]
      }
    }
  ]
})
