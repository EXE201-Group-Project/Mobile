//"normal" | "success" | "danger" | "warning"
export const showToast = (toast, msg, type) => {
  toast.show(msg, {
    type: type,
    placement: 'top',
    duration: 4000,
    offset: 30,
    animationType: 'slide-in'
  });
};
