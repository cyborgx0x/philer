use reqwest::blocking::get;
use serde::Deserialize;
use serde_json::Value;
use std::error::Error;

#[derive(Deserialize)]
struct Data {
    // Define the structure of your JSON data here
}

fn main() -> Result<(), Box<dyn Error>> {
    let url = "https://httpbin.org/headers";
    let response = get(url)?.text()?;
    let json_data: Value = serde_json::from_str(&response)?;

    // If you know the structure of the JSON data, you can deserialize it into a Rust struct
    // let data: Data = serde_json::from_str(&response)?;

    println!("JSON data: {}", json_data);

    Ok(())
}
