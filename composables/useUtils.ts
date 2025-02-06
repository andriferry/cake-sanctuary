export const useUtils = () => {
  const { icons } = useAppConfig();

  const isPasswordVisible = ref(false);

  const isPasswordConfirmVisible = ref(false);

  const passWordField = computed(() =>
    isPasswordVisible.value ? 'text' : 'password'
  );
  const passwordIcon = computed(() =>
    isPasswordVisible.value ? icons.eyeIconOff : icons.eyeIcon
  );

  const passwordFieldConfirm = computed(() =>
    isPasswordConfirmVisible.value ? 'text' : 'password'
  );
  const passwordConfirmIcon = computed(() =>
    isPasswordConfirmVisible.value ? icons.eyeIconOff : icons.eyeIcon
  );

  return {
    isPasswordVisible,
    passWordField,
    passwordIcon,
    isPasswordConfirmVisible,
    passwordFieldConfirm,
    passwordConfirmIcon,
  };
};
