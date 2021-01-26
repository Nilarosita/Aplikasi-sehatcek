class Idealitas {
    protected tinggiBadan;
    protected beratBadan;
    protected hasilKalkulasi;
    protected beratIdeal;

    constructor(tinggi:number, berat:number) {
        this.tinggiBadan = tinggi;
        this.beratBadan = berat;
    }

    kalkulasi(gender:string) {
        let result:number;
        if(gender == 'male') {
            result = (this.tinggiBadan - 100) - ((this.tinggiBadan - 100) * 10 / 100);    
        } else {
            result = (this.tinggiBadan - 100) - ((this.tinggiBadan - 100) * 15 / 100);    
        }
        this.beratIdeal = result;
        this.hasilKalkulasi = this.beratBadan / ((this.tinggiBadan / 100) * (this.tinggiBadan / 100));
    }

    tentukanKelas() {
        if(this.hasilKalkulasi.toFixed(1) < 18.5) {
            console.log('hasil = '+this.hasilKalkulasi.toFixed(1));
            alert('Angka BMI = '+this.hasilKalkulasi.toFixed(1)+' | Berat badan kamu ada pada kelas : KURUS');
        } else if(this.hasilKalkulasi.toFixed(1) >= 25 && this.hasilKalkulasi <= 29.9) {
            console.log('hasil = '+this.hasilKalkulasi.toFixed(1));
            alert('Angka BMI = '+this.hasilKalkulasi.toFixed(1)+' | Berat badan kamu ada pada kelas : GEMUK');
        } else if(this.hasilKalkulasi.toFixed(1) >= 30) {
            console.log('hasil = '+this.hasilKalkulasi.toFixed(1));
            alert('Angka BMI = '+this.hasilKalkulasi.toFixed(1)+' | Berat badan kamu ada pada kelas : OBESITAS');
        }
        return window.location.href = "fituruser_cek.html";
    }
    
}