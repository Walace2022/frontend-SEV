export function Input({ type, placeholder, name, register }) {
  return <input type={type} placeholder={placeholder} {...register(name)} />;
}
