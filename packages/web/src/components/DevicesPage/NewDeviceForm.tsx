import dayjs from 'dayjs'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { t } from '../../i18n'
import { useAddNewDevice } from '../../services/Devices/useAddNewDevice'
import {
  ColumnContainer,
  ErrorMessage,
  FlexContainer,
  FormContainer,
  Label,
  StyledInput,
  SubmitButton,
  SubmitContainer,
} from './style'

type Inputs = {
  firstName: string
  lastName: string
  mobileNumber: string
  latitude: number
  longitude: number
  role: string
  type: string
  description: string
}

const initialState = {
  defaultValues: {
    firstName: '',
    lastName: '',
    mobileNumber: '',
    latitude: undefined,
    longitude: undefined,
    role: '',
    type: '',
    description: '',
  },
}

export const NewDeviceForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>(initialState)

  const { mutate, isSuccess } = useAddNewDevice()

  useEffect(() => {
    if (isSuccess) {
      reset()
    }
  }, [isSuccess])

  return (
    <FormContainer
      onSubmit={handleSubmit((data) => {
        mutate({
          firstName: data.firstName,
          lastName: data.lastName,
          id: Math.floor(100000 + Math.random() * 900000),
          lastConnection: dayjs().format('YYYY-MM-DDTHH:mm:ss'),
          latitude: data.latitude,
          longitude: data.longitude,
          mobileNumber: data.mobileNumber,
          description: data.description,
          role: data.role,
          type: data.type,
        })
      })}
    >
      <FlexContainer>
        <ColumnContainer>
          <Label>{t('page.devicesPage.table.firstName')}</Label>
          <StyledInput
            {...register('firstName', { required: true, maxLength: 10 })}
          />
          {errors.firstName && (
            <ErrorMessage>{t('page.devicesPage.forms.required')}</ErrorMessage>
          )}
          <Label>{t('page.devicesPage.table.role')}</Label>
          <StyledInput
            {...register('role', { required: true, maxLength: 10 })}
          />
          {errors.role && (
            <ErrorMessage>{t('page.devicesPage.forms.required')}</ErrorMessage>
          )}
          <Label>{t('page.devicesPage.table.latitude')}</Label>
          <StyledInput
            {...register('latitude', { required: true, maxLength: 10 })}
          />
          {errors.latitude && (
            <ErrorMessage>{t('page.devicesPage.forms.required')}</ErrorMessage>
          )}
          <Label>{t('page.devicesPage.table.mobileNumber')}</Label>
          <StyledInput
            {...register('mobileNumber', { required: true, maxLength: 10 })}
          />
          {errors.mobileNumber && (
            <ErrorMessage>{t('page.devicesPage.forms.required')}</ErrorMessage>
          )}
        </ColumnContainer>

        <ColumnContainer>
          <Label>{t('page.devicesPage.table.lastName')}</Label>
          <StyledInput {...register('lastName')} />
          <Label>Type</Label>
          <StyledInput
            {...register('type', { required: true, maxLength: 10 })}
          />
          {errors.type && (
            <ErrorMessage>{t('page.devicesPage.forms.required')}</ErrorMessage>
          )}
          <Label>{t('page.devicesPage.table.longitude')}</Label>
          <StyledInput
            {...register('longitude', { required: true, maxLength: 10 })}
          />
          {errors.longitude && (
            <ErrorMessage>{t('page.devicesPage.forms.required')}</ErrorMessage>
          )}
          <Label>{t('page.devicesPage.table.description')}</Label>
          <StyledInput
            {...register('description', { required: true, maxLength: 200 })}
          />
          {errors.description && (
            <ErrorMessage>{t('page.devicesPage.forms.required')}</ErrorMessage>
          )}
        </ColumnContainer>
      </FlexContainer>
      <SubmitContainer>
        <SubmitButton type="submit">Submit</SubmitButton>
      </SubmitContainer>
    </FormContainer>
  )
}
