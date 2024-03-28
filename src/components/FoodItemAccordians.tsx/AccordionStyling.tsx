export const accordionContainerStyle = {
  background: "white",
  paddingTop: "30px",
  width: "100%",
  borderRadius: "15px",
};

export const accordionTitleStyle = {
  fontFamily: "'Baloo 2', cursive",
  paddingLeft: "10px",
};

export const accordionContentStyle = {
  paddingTop: "12px",
  border: "1px solid #E3E8Ef",
  width: "100%",
  display: "flex",
  flexDirection: "column" as const, // Ensure it's one of the allowed values or undefined
  gap: "10px",
};

export const accordionHeaderStyle = {
  cursor: "pointer",
  transition: "max-height 0.5s ease-in-out",
  paddingLeft: "15px",
  paddingBottom: "10px",
};

export const imageStyle = {
  marginRight: "10px",
  width: "50px",
  height: "50px",
};

export const textStyle = {
  display: "flex",
  flexDirection: "column" as const,
  gap: "2px",
  fontFamily: "'Nunito', sans-serif",
};

export const foodNameStyle = {
  fontFamily: "'Nunito', sans-serif",
  fontWeight: 700,
  fontSize: "16px",
  lineHeight: "21.82px",
  color: "#191A1C",
};

export const priceStyle = {
  color: "#FF1001",
  fontFamily: "Nunito, sans-serif",
  fontWeight: 700,
  fontSize: "14px",
  lineHeight: "19.1px",
};

export const accordionBodyStyle = {
  background: "#E3E8EF",
  padding: "12px 24px",
  gap: "12px",
  transition: "max-height 0.5s ease-in-out", 
};

export const nameInputFieldStyle = {
  marginRight: "12px",
  borderRadius: "8px",
  fontFamily: "'Nunito', sans-serif",
  fontWeight: 500,
  fontSize: "15px",
  lineHeight: "20px",
  color: "#344054",
  width: "240px",
  height: "40px",
  border: "none",
  paddingLeft: "15px",
};

export const priceInputFieldStyle = {
  marginRight: "12px",
  borderRadius: "8px",
  fontFamily: "'Nunito', sans-serif",
  fontWeight: 500,
  fontSize: "15px",
  lineHeight: "20px",
  color: "#344054",
  width: "160px",
  height: "40px",
  border: "none",
  paddingLeft: "15px",
};

export const buttonStyle = {
  border: "2px solid #12B76A ",
  borderRadius: "10px",
  width: "40px",
  height: "40px",
};

export const addNewStyle = {
  width: "100%",
  height: "50px",
  marginTop: "2px",
  background: "white",
  color: "red",
  border: "none",
};
