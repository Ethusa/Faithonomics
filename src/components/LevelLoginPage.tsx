import { useEffect, useState, type FormEvent } from "react";
import { levelAccessCredentials } from "../data/sampleData";
import { authenticateLevelAccess } from "../domain/levelAccess";
import type { LevelAccessCredential } from "../domain/types";
import { LogIn } from "./Icons";

export const LevelLoginPage = ({
  initialModuleId,
  onBack,
  onLogin,
}: {
  initialModuleId?: string | null;
  onBack: () => void;
  onLogin: (access: LevelAccessCredential) => void;
}) => {
  const firstCredential =
    levelAccessCredentials.find((credential) => credential.moduleId === initialModuleId) ?? levelAccessCredentials[0];
  const [moduleId, setModuleId] = useState(firstCredential?.moduleId ?? "");
  const [username, setUsername] = useState(firstCredential?.username ?? "");
  const [password, setPassword] = useState(firstCredential?.password ?? "");
  const [error, setError] = useState("");
  const selectedCredential =
    levelAccessCredentials.find((credential) => credential.moduleId === moduleId) ?? firstCredential;

  useEffect(() => {
    const nextCredential =
      levelAccessCredentials.find((credential) => credential.moduleId === initialModuleId) ?? levelAccessCredentials[0];
    setModuleId(nextCredential?.moduleId ?? "");
    setUsername(nextCredential?.username ?? "");
    setPassword(nextCredential?.password ?? "");
    setError("");
  }, [initialModuleId]);

  const submitLogin = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const access = authenticateLevelAccess(levelAccessCredentials, moduleId, username, password);
    if (!access) {
      setError("The level login or password is incorrect.");
      return;
    }
    setError("");
    onLogin(access);
  };

  return (
    <main className="login-page">
      <section className="login-panel">
        <div className="login-brand">
          <div className="login-logo-crop">
            <img
              src="https://static.wixstatic.com/media/7638b6_d0228f89f4b24c9b99aa50c8b52a03b3~mv2.png"
              alt="Faithonomics"
            />
          </div>
          <h1>Student Portal</h1>
          <p>Sign in with the login issued for your selected level.</p>
          {selectedCredential ? <span className="login-selected-level">{selectedCredential.levelTitle}</span> : null}
          <button className="login-back-button" type="button" onClick={onBack}>
            View all courses
          </button>
        </div>
        <form className="login-form" onSubmit={submitLogin}>
          <label>
            <span>Level</span>
            <select
              value={moduleId}
              onChange={(event) => {
                const nextCredential = levelAccessCredentials.find(
                  (credential) => credential.moduleId === event.target.value,
                );
                setModuleId(event.target.value);
                setUsername(nextCredential?.username ?? "");
                setPassword(nextCredential?.password ?? "");
              }}
            >
              {levelAccessCredentials.map((credential) => (
                <option key={credential.moduleId} value={credential.moduleId}>
                  {credential.levelTitle}
                </option>
              ))}
            </select>
          </label>
          <label>
            <span>Login</span>
            <input
              autoComplete="username"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              placeholder="level1"
            />
          </label>
          <label>
            <span>Password</span>
            <input
              autoComplete="current-password"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="faith1"
            />
          </label>
          {error ? <p className="status error">{error}</p> : null}
          <button className="primary-button" type="submit">
            <LogIn size={18} />
            {selectedCredential ? `Open ${selectedCredential.levelTitle}` : "Open student page"}
          </button>
        </form>
      </section>
    </main>
  );
};
