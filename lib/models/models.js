Nhoms = new Mongo.Collection("nhoms");
ChungLoais = new Mongo.Collection("chungloais");
Loais = new Mongo.Collection("loais");
Parties = new Mongo.Collection("parties");
DonVis = new Mongo.Collection("donvis");
DiaBans = new Mongo.Collection("diabans");
QuocGias = new Mongo.Collection("quocgias");
HangSanXuats = new Mongo.Collection("hangsanxuats");
ModelThietBis = new Mongo.Collection("modelthietbis");
LoaiThongSoKyThuats = new Mongo.Collection("loaithongsokythuats");
ThietBis = new Mongo.Collection("thietbis");
UserSettings = new Mongo.Collection("usersettings");
LichSuaChuas = new Mongo.Collection("lichsuachuas");
HoSoLuuTrus = new Mongo.Collection("hosoluutrus");

Images = new FS.Collection("images", {
    stores: [
        new FS.Store.GridFS("original")
    ],
    filter: {
        allow: {
            contentTypes: ['image/*']
        }
    }
});
