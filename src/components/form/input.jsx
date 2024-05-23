function Input({ id, name, type, title, placeholder, value, onChange }) {
  return (
    <label htmlFor={id}>
      <p>{title}</p>
      <input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </label>
  )
}

export function InputText({ title, placeholder, value, onChange }) {
  return (
    <Input
      id="text"
      name="text"
      type="text"
      title={title}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  )
}

export function InputPhoneNumber({ value, onChange }) {
  return (
    <Input
      id="phoneNumber"
      name="phoneNumber"
      type="tel"
      title="연락처"
      placeholder="010-0000-0000"
      value={value}
      onChange={onChange}
    />
  )
}

export function InputEmail({ value, onChange }) {
  return (
    <Input
      id="email"
      name="email"
      type="email"
      title="이메일"
      placeholder="abc@def.com"
      value={value}
      onChange={onChange}
    />
  )
}