def celsius_to_fahrenheit(c):
    return (c * 9/5) + 32
def celsius_to_kelvin(c):
    return c + 273.15
def fahrenheit_to_celsius(f):
    return (f - 32) * 5/9
def fahrenheit_to_kelvin(f):
    return (f - 32) * 5/9 + 273.15
def kelvin_to_celsius(k):
    return k - 273.15
def kelvin_to_fahrenheit(k):
    return (k - 273.15) * 9/5 + 32
temparutur_type = str(input(" Ta C, F, K 3-iin negiig butsaana uu! ")).strip().upper()
try:
    temparutur = float(input ("ta temparuturiin convert ashiglah gej baina. Ta too oruulna uu"))
    if temparutur_type == "C":
        f=celsius_to_fahrenheit(temparutur)
        k=celsius_to_kelvin(temparutur)
        print(f"ta °C {temparutur}g °F-iin: {f:.2f} gradus, °K-iin: {k:.2f} gradustai tentsuu")
    elif temparutur_type == "F":
        c= fahrenheit_to_celsius(temparutur)
        k= fahrenheit_to_kelvin(temparutur)
        print(f"ta °F {temparutur}g °C-iin: {c:.2f} gradus, °K-iin: {k:.2f} gradustai tentsuu")

    elif temparutur_type == "K":
        if temparutur >= 0:
            c= kelvin_to_celsius(temparutur)
            f= kelvin_to_fahrenheit(temparutur)
            print(f"ta °K {temparutur}g °C-iin: {c:.2f} gradus, °F-iin: {f:.2f} gradustai tentsuu")
        else: print("ta °K too 0 oos ih bai ystoi")
    else:
        print("ta number butsaah ystoi")
    
except ValueError:  
    print("Та зөвхөн тоон утга оруулна уу!") # int биш байх юм бол хариулах алдааны мсж 






#temp_c_f = (temparutur * 9/5) + 32
#temp_c_k = temparutur + 273.15
#temp_f_c = 
#temp_f_k = 
#temp_k_f = 
#temp_k_c = 

    
    
    
    
    
    
    
    
    
    
    
