export default class MovieInfo {
  maPhim:number;
  tenPhim: string;
  biDanh:string;
  trailer:string;
  hinhAnh:string;
  moTa:string;
  maNhom:string;
  ngayKhoiChieu:string;
  danhGia:number;
  rapChieu: string;
  ngayXem: string;
  suatChieu: string;

  init(item){
    this.maPhim = item.maPhim;
    this.tenPhim=item.tenPhim;
    this.biDanh=item.biDanh;
    this.trailer = item.trailer;
    this.hinhAnh = item.hinhAnh;
    this.moTa = item.moTa;
    this.maNhom = item.moTa;
    this.ngayKhoiChieu = item.ngayKhoiChieu;
    this.danhGia = item.danhGia;
    return this;
  }
}