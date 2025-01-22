export function useFormValidation() {
  const formRef = ref<{ validate: () => Promise<{ valid: boolean }> } | null>(
    null
  );
  const rules = computed(() => ({
    required: (value: string) => !!value || "هذا الحقل مطلوب.",
    minLength: (length: number) => (value: string) =>
      value?.length >= length || `يجب أن يكون ${length} أحرف على الأقل.`,
    phoneNumber: (value: string) =>
      /^[0-9]{9,10}$/.test(value) || "رقم الهاتف غير صحيح.",
    passwordStrength: (value: string) =>
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[\W_]).{8,}$/.test(value) ||
      "كلمة المرور ضعيفة. يجب أن تحتوي على 8 أحرف على الأقل بما في ذلك حرف كبير وحرف صغير ورقم ورمز.",
    confirmPassword: (value: string, originalPassword: string) =>
      value === originalPassword || "كلمتا المرور غير متطابقتين.",
  }));
  const validate = async () => {
    if (!formRef.value) {
      throw new Error("Form reference is null");
    }
    const { valid } = await formRef.value.validate();
    if (!valid) {
      throw new Error("Form is invalid");
    }
    return valid;
  };

  return { rules, validate, formRef };
}
