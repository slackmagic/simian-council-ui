#![cfg_attr(
  all(not(debug_assertions), target_os = "windows"),
  windows_subsystem = "windows"
)]

use simian_council_lib;

fn main() {
  tauri::Builder::default()
    .invoke_handler(tauri::generate_handler![
      get_password,
      get_pokemon_with_adjective
    ])
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}

#[tauri::command]
fn get_password(num: u8, min: u8, max: u8) -> String {
  simian_council_lib::ask_for_a_secret(num, min, max)
}

#[tauri::command]
fn get_pokemon_with_adjective() -> String {
  simian_council_lib::ask_for_a_pokemon_with_adjective()
}
