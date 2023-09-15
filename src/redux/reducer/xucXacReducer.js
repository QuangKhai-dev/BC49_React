const stateXucXacReducer = {
  xucXac1: 3,
  xucXac2: 6,
  xucXac3: 5,
  nguoiDungChon: '',
  soBanThang: 0,
  tongSoBanChoi: 0,
};

// tham số state đại diện cho các dữ liệu được lưu trên store
// action đại diện cho các dispatch được phía giao diện đẩy lên nhằm thay đổi hoặc xử lí các dữ liệu đang có trên store
export const xucXacReducer = (state = stateXucXacReducer, action) => {
  console.log(action);

  // sử dụng switch case giúp bắt các trường hợp action được đẩy lên
  switch (action.type) {
    case 'LAC_XI_NGAU': {
      const newState = { ...state, ...action.payload };
      const { xucXac1, xucXac2, xucXac3 } = action.payload;
      const ketQua = xucXac1 + xucXac2 + xucXac3 >= 11 ? 'Tài' : 'Xỉu';
      // mang tổng giá trị đi đối chiếu với kết quả người dùng
      if (state.nguoiDungChon !== '') {
        // cộng thêm 1 giá trị khi mà ng dùng đã chọn 1 cửa và bấm play game
        newState.tongSoBanChoi += 1;
        if (state.nguoiDungChon === ketQua) {
          newState.soBanThang += 1;
        }
      }

      return newState;
    }
    case 'HANDLE_NGUOI_DUNG_CHON': {
      const newState = { ...state, nguoiDungChon: action.payload };
      return newState;
    }
    default: {
      return state;
    }
  }
};
